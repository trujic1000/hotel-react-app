export const roomActions = (state, dispatch) => {
  const getRoom = slug => {
    const tempRooms = [...state.rooms];
    return tempRooms.find(room => room.slug === slug);
  };

  const filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = state;
    let tempRooms = [...rooms];
    // Transform value
    // Filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // Filter by capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // Filter by price
    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price <= price);
    // Filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast);
    }
    // Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets);
    }
    // Update state
    dispatch({ type: 'RESET', payload: { ...state, sortedRooms: tempRooms } });
  };

  const handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch({
      type: 'RESET',
      payload: {
        ...state,
        [name]: value
      }
    });
  };

  return {
    getRoom,
    handleChange,
    filterRooms
  };
};
