export const roomActions = (state, dispatch) => {
  const getRoom = slug => {
    const tempRooms = [...state.rooms];
    return tempRooms.find(room => room.slug === slug);
  };

  const handleChange = e => {
    const target = e.target;
    const value = e.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch({
      type: 'RESET',
      payload: {
        ...state,
        [name]: value
      }
    });
    // filterRooms();
  };

  const filterRooms = () => {
    console.log('Hello');
  };

  return {
    getRoom,
    handleChange,
    filterRooms
  };
};
