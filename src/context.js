import React, { createContext, useReducer, useContext, useEffect } from 'react';
import items from './data';

const RoomContext = createContext();

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true
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
  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);
    dispatch({
      type: 'RESET',
      payload: { rooms, sortedRooms: rooms, featuredRooms, loading: false }
    });
  }, []);
  return (
    <RoomContext.Provider value={{ state, dispatch }}>
      {children}
    </RoomContext.Provider>
  );
};

const useRoomState = () => {
  return useContext(RoomContext);
};

export { RoomProvider, useRoomState };
