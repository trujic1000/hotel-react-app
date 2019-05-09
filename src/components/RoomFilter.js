import React from 'react';
import { useRoomState } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const {
    state,
    actions: { handleChange }
  } = useRoomState();
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = state;
  // Get unique types
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/* End select type */}
      </form>
    </section>
  );
};

export default RoomFilter;
