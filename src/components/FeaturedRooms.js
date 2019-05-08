import React from 'react';

import { useRoomState } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

const FeaturedRooms = () => {
  const { state } = useRoomState();
  const { featuredRooms, loading } = state;
  const rooms = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="Featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
