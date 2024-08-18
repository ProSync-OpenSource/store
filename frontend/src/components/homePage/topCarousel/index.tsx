import Image from "next/image";

import { useState, useEffect } from "react";

import 'node_modules/swiper/swiper.css';
import 'node_modules/swiper/modules/pagination.css';
import 'node_modules/swiper/modules/autoplay.css';
import 'node_modules/swiper/modules/navigation.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import Arrow_left from 'public/assets/home/arrow_left.png';
import Arrow_right from 'public/assets/home/arrow_right.png';

import Banner_1 from 'public/assets/home/Banner_1.png';
import Mb_Banner_1 from 'public/assets/home/Mb_Banner_1.png';
import Banner_3 from 'public/assets/home/Banner_3.png';
import Mb_Banner_3 from 'public/assets/home/Mb_Banner_3.png';

import { SwiperContainer } from "@/components/homePage/styles";

interface Props {
  onButtonClicked: () => void
}

export function TopSlides(props: Props) {

  const breakpoints = {
    200: {
      spaceBetween: 10,
      slidesPerView: 1
    },
    800: {
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: {
        delay: 4000
      }
    },
  }

  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));
  }, []);

  const slideImages = [{
    img: pageWidth >= 800 ? Banner_1 : Mb_Banner_1,
    alt: 'mulher branca sorrindo e apontando para uma texto'
  }, {
    img: pageWidth >= 800 ? Banner_3 : Mb_Banner_3,
    alt: 'mulher negra olhando para o celular e sorrindo'
  }, {
    img: pageWidth >= 800 ? Banner_1 : Mb_Banner_1,
    alt: 'mulher branca sorrindo e apontando para uma texto'
  }]

  const slides: JSX.Element[] =
    slideImages.map((image, index) => (
      <SwiperSlide key={index} className="slides">
        <Image
          src={image.img}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover max-[800px]:rounded-md min-[800px]:object-left"
        />
      </SwiperSlide>
    ));

  return (
    <SwiperContainer>
      <Swiper
        style={{
          overflow: 'visible',
        }}

        className="top-slides h-auto max-[750px]:h-56"

        loop={true}

        centeredSlides={true}

        navigation={{
          nextEl: '.btn-slide-next',
          prevEl: '.btn-slide-prev',
        }}

        breakpoints={breakpoints}

        lazyPreloadPrevNext={3}

        pagination={{
          clickable: false,
        }}

        modules={[Navigation, Autoplay, Pagination]}
      >

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
      <div className="overlay absolute w-full h-20 bottom-0 left-0 z-20 max-[800px]:hidden"></div>
    </SwiperContainer>
  );
};
