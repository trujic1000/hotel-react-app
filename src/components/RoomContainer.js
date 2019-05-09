import React from 'react';
import { useRoomState } from '../context';

import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

const RoomContainer = () => {
  const { state } = useRoomState();
  const { rooms, sortedRooms, loading } = state;
  if (loading) return <Loading />;
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomContainer;
