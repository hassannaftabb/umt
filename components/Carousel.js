import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselMain = () => {
  return (
    <div className="flex sm:h-[90vh]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        width="100%"
        stopOnHover={false}
        showStatus={false}
      >
        <div>
          <img src="/products/urea_breath_analyzer.png" alt="image1" />
        </div>
        <div>
          <img src="/products/instruments.png" alt="image2" />
        </div>
        <div>
          <img src="/products/disp_cons.png" alt="image3" />
        </div>
        <div>
          <img src="/service.jpg" alt="image4" />
        </div>
        <div>
          <img src="/img_1.jpg" alt="image5" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
