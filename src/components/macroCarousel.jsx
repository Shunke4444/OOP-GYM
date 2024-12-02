import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Protein from './proteinToday';
import Calories from './caloriesToday'
import CarbsToday from './carbsToday';

const MacroCarousel = () => {
  return (
    <Carousel classname='z-10' showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
      <div>
        <Protein/>
      </div>
      <div>
        <Calories />
      </div>
      <div>
        <CarbsToday/>
      </div>
    </Carousel>
  );
};

export default MacroCarousel;