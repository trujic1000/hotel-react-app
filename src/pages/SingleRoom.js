import React from 'react';
import { Link } from 'react-router-dom';
import { useRoomState } from '../context';
import { useRoomActions } from '../actions/roomActions';

import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';

const SingleRoom = props => {
  const {
    state,
    actions: { getRoom }
  } = useRoomState();
  const { slug } = props.match.params;
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, i) => {
            return <img key={i} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: ${size} SQFT</h6>
            <h6>
              Max capacity:
              {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
            </h6>
            <h6>{pets ? 'Pets allowed' : 'No pets allowed'}</h6>
            <h6>{breakfast && 'Free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, i) => (
            <li key={i}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
