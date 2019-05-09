import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo
} from 'react';
import { roomActions } from './actions/roomActions';
import items from './data';

const RoomContext = createContext();

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: 'all',
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};

const formatData = items => {
  let tempItems = items.map(item => {
    let { id } = item.sys;
    let images = item.fields.images.map(image => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

const init = state => {
  return { ...state };
};

const roomReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return init(action.payload);
    default:
      throw new Error('Invalid action type');
  }
};

const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roomReducer, initialState, init);
  const actions = roomActions(state, dispatch);
  const value = useMemo(() => {
    return {
      state,
      actions
    };
  }, [state, actions]);
  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    dispatch({
      type: 'RESET',
      payload: {
        ...initialState,
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        maxPrice,
        maxSize
      }
    });
  }, []);
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

const useRoomState = () => {
  return useContext(RoomContext);
};

export { RoomProvider, useRoomState };
