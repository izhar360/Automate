import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/**
 * @author
 * @function Hero
 **/

export const Hero = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      isPlaying={true}
      interval={2000}
      className="h-[16rem] md:h-[26rem] w-full  relative"
    >
      <Slider className="h-full">
        <Slide index={0}>
          <img
            className="h-2/4  rounded-lg  md:h-[24rem] w-4/5 mx-auto pt-6 drop-shadow-lg contrast-[.8]"
            src="https://media.istockphoto.com/photos/man-used-hand-remote-control-to-open-swing-gate-door-by-motor-is-picture-id1164249414?k=20&m=1164249414&s=612x612&w=0&h=xTaYCLbQqV4FvW2MJKyGU1R1vsI1rbfcmdXrsKdP6Kw="
          />
        </Slide>
        <Slide index={1}>
          <img
            className="h-2/4 rounded-lg md:h-[24rem] w-4/5 mx-auto pt-6"
            src="https://www.acixme.com/wp-content/uploads/2019/09/sliding-doors-gates.jpg"
          />
        </Slide>
        <Slide index={2}>
          <img
            className="h-2/4 rounded-lg md:h-[24rem] w-4/5 mx-auto pt-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSPQAOyi6xaTYNGfSa2RSplJt-DQpo-va8Q&usqp=CAU"
          />
        </Slide>
      </Slider>
      <ButtonBack className="absolute top-28 left-2  md:top-48 md:left-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </ButtonBack>
      <ButtonNext className="absolute top-28 right-2 md:top-48 md:right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-10 md:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </ButtonNext>
    </CarouselProvider>
  );
};
export default Hero;
