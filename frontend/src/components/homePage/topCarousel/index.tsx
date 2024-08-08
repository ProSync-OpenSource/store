import Image from "next/image";

import '@@/node_modules/swiper/swiper.css';
import '@@/node_modules/swiper/modules/pagination.css';
import '@@/node_modules/swiper/modules/autoplay.css';
import '@@/node_modules/swiper/modules/navigation.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Arrow_left from '@@/public/assets/home/arrow_left.png';
import Arrow_right from '@@/public/assets/home/arrow_right.png';
import Poster_1 from '@@/public/assets/home/poster_1.svg';

import { SwiperContainer } from "@/components/homePage/styles";

interface Props {
  onButtonClicked: () => void
}

export function TopSlides(props: Props) {

  const slides = <SwiperSlide>
    <Image
      src={Poster_1}
      alt={''}
      className="w-full h-full object-cover object-center"
    />
  </SwiperSlide>

  return (
    <SwiperContainer>
      <Swiper
        style={{
          width: '100%',
          zIndex: 5,
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}

        className="h-[460px] max-[900px]:h-96 max-[800px]:h-80 max-[750px]:h-auto"

        slidesPerView={1}
        loop={true}

        navigation={{
          nextEl: '.btn-slide-next',
          prevEl: '.btn-slide-prev',
        }}

        autoplay={{
          delay: 4000,
        }}

        modules={[Navigation, Autoplay]}
        spaceBetween={0}
      >

       {slides}
       {slides}
       {slides}

      </Swiper>

      <div className='swiper-controllers w-full max-[800px]:hidden'>
        <button className='btn-slide-prev w-[75px] h-[75px] flex justify-center items-center bg-base-color absolute top-2/4 z-10 -translate-y-2/4 outline-none left-16 -translate-x-2/4 rounded-full max-[900px]:w-[66px] max-[900px]:h-[66px]'>
          <Image
            src={Arrow_left}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className='w-[23px] h-auto object-cover max-[900px]:w-5'
          />
        </button>

        <button className='btn-slide-next w-[75px] h-[75px] flex justify-center items-center bg-base-color absolute top-2/4 z-10 -translate-y-2/4 outline-none right-16 translate-x-2/4 rounded-full max-[900px]:w-[66px] max-[900px]:h-[66px]'>
          <Image
            src={Arrow_right}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className='w-[23px] h-auto object-cover max-[900px]:w-5'
          />
        </button>
      </div>

      <div className="overlay absolute w-full h-24 bottom-0 left-0 z-20"></div>
    </SwiperContainer>
  );
};
