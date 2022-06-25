import React from 'react';
import Banner from '../components/Banner';
import CarouselMain from '../components/Carousel';
import Cta from '../components/Cta';
import Values from '../components/Values';

export default function Home() {
  return (
    <section className="mt-18">
      <CarouselMain />
      <Banner />
      <Cta />
      <Values />
    </section>
  );
}
