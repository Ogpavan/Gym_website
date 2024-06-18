// components/Homepage.js
import React from 'react';
import Aboutus from './Aboutus';
import Whychooseus from './Whychooseus';
import Trainers from './Trainers';
import Pricing from './Pricing';
import Reviews from './Reviews';

function Routing() {
  return (
    <>
      <section id="aboutus">
        <Aboutus />
      </section>
      <section id="whychooseus">
        <Whychooseus />
      </section>
      <section id="trainers">
        <Trainers />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="pricingplan2">
        <Pricingplan2/>
      </section>
      <section id="reviews">
        <Reviews />
      </section>
    </>
  );
}

export default Routing;
