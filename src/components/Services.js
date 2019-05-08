import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: 'Free coctails',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, molestiae.'
    },
    {
      icon: <FaHiking />,
      title: 'Endless hiking',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, molestiae.'
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free shuttle',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, molestiae.'
    },
    {
      icon: <FaBeer />,
      title: 'Strongest beer',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, molestiae.'
    }
  ];
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, i) => {
          return (
            <article key={i} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
