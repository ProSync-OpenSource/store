import Image from "next/image";

import '@@/node_modules/swiper/swiper.css';
import '@@/node_modules/swiper/modules/pagination.css';
import '@@/node_modules/swiper/modules/autoplay.css';
import '@@/node_modules/swiper/modules/navigation.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

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
      className="w-full h-full object-cover m-auto object-center max-[800px]:w-[calc(100%-80px)] max-[800px]:rounded-md max-[750px]:w-[calc(100%-30px)] max-[750px]:object-left"
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

        className="h-[460px] max-[900px]:h-96 max-[800px]:h-80 max-[750px]:h-60"

        slidesPerView={1}
        loop={true}

        navigation={{
          nextEl: '.btn-slide-next',
          prevEl: '.btn-slide-prev',
        }}

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 4000,
        }}

        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
      >

       {slides}
       {slides}
       {slides}

      </Swiper>

      <div className='swiper-controllers w-full'>
        <button className='btn-slide-prev w-[75px] h-[75px] flex justify-center items-center bg-base-color absolute top-2/4 z-10 -translate-y-2/4 outline-none left-16 -translate-x-2/4 rounded-full max-[1000px]:w-16 max-[1000px]:h-16 max-[900px]:h-[66px]'>
          <Image
            src={Arrow_left}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className='w-6 h-auto object-cover max-[1000px]:w-5 max-[900px]:w-5'
          />
        </button>

        <button className='btn-slide-next w-[75px] h-[75px] flex justify-center items-center bg-base-color absolute top-2/4 z-10 -translate-y-2/4 outline-none right-16 translate-x-2/4 rounded-full max-[1000px]:w-16 max-[1000px]:h-16 max-[900px]:h-[66px]'>
          <Image
            src={Arrow_right}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className='w-6 h-auto object-cover max-[1000px]:w-5 max-[900px]:w-5'
          />
        </button>
      </div>
status
      <div className="overlay absolute w-full h-24 bottom-0 left-0 z-20 max-[800px]:hidden"></div>
    </SwiperContainer>
  );
};
