import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Default = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Default;
