import Image from 'next/image'

import { useRef, MutableRefObject, useState, useEffect } from 'react';

import { FaStar } from 'react-icons/fa'
import { IoIosAdd } from "react-icons/io";

import Arrow_left from 'public/assets/home/arrow_left.png';
import Arrow_right from 'public/assets/home/arrow_right.png';
import Shipping_icon from 'public/assets/home/shipping_2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { ProductsSectionTitleBox } from '@/components/homePage/styles';

import 'node_modules/swiper/swiper.css';
import 'node_modules/swiper/modules/pagination.css';
import 'node_modules/swiper/modules/autoplay.css';
import 'node_modules/swiper/modules/navigation.css';

import { ProductsSlideElement, SwiperContainer } from '@/components/homePage/styles';

type SwiperProps = {
  productsData?: any;
  navigation?: { nextEl: string; prevEl: string };
  title?: string;
}

export default function ProductsModelOne(props: SwiperProps) {
  const [sectionTitleWidth, setSectionTitleWidth] = useState(0);

  const sectionTitleRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null)

  const breakpoints = {
    300: {
      spaceBetween: 15
    },
    600: {
      spaceBetween: 20
    }
  };

  useEffect(() => {
    sectionTitleRef.current?.offsetWidth && 
      setSectionTitleWidth(sectionTitleRef.current.offsetWidth);
  },[sectionTitleRef]);

  const slideElement: JSX.Element =
    props.productsData &&
    <SwiperSlide style={{ width: 'auto' }}>
      <ProductsSlideElement>
        <div className='w-full flex justify-center items-center h-80 overflow-hidden'>
          <Image
            src={props.productsData.product_image}
            alt={'black smart watch with amoled screen'}
            width={500}
            height={500}
            className='w-20 h-auto object-cover max-[900px]:w-16'
          />
        </div>

        <div className='w-full h-full flex flex-col items-start justify-start pb-3 gap-y-2'>
          <p className='text-gray-800 font-medium text-[16px] max-[900px]:text-[15px]'>{props.productsData.product_title}</p>

          <div className='w-full flex flex-col items-start justify-center'>

            <div className='w-full flex flex-row items-center gap-x-3 mb-3'>
              <div className='flex flex-row items-center justify-start gap-x-1'>
                <FaStar className='text-orange-400 text-sm' />
                <FaStar className='text-orange-400 text-sm' />
                <FaStar className='text-orange-400 text-sm' />
                <FaStar className='text-orange-400 text-sm' />
                <FaStar className='text-gray-400 text-sm' />
              </div>

              <div className='flex items-center gap-x-0'>
                <p className='text-gray-800 font-medium leading-none text-xs max-[900px]:text-[13px]'>{props.productsData.vote_average}</p>
                <IoIosAdd className='text-black text-sm' />
              </div>
            </div>

            {props.productsData.offer ? (

              <>
                <p className='text-gray-500 text-sm font-medium mt-1 leading-tight line-through max-[900px]:text-[13px]'>R${props.productsData.product_price}</p>
                <div className='flex items-center gap-x-2'>
                  <p className='text-gray-800 font-semibold text-[27px] leading-tight max-[900px]:text-2xl'>R$ {`${(props.productsData.product_price * (1 - props.productsData.offer)).toFixed(2)}`.replace('.', ',')}</p>
                  <p className='text-primary font-medium text-sm'>{props.productsData.offer * 100}% OFF</p>
                </div>
              </>

            ) : (
              <p className='text-gray-800 font-bold text-[27px] leading-tight'>R${`${props.productsData.product_price}`.replace('.', ',')}</p>
            )}

            <p className='w-full text-gray-500 font-medium text-sm relative max-[900px]:text-[13px]'>
              Até <span className='text-gray-950'>{props.productsData.installments}x de
                R$ {`${props.productsData.installments_price}`.replace('.', ',')}
              </span>
            </p>
          </div>

          <div className='flex items-center gap-x-3'>
            <Image
              src={Shipping_icon}
              alt={'purple delivery car'}
              className='w-5 h-auto object-cover'
            />
            <p className='text-primary font-semibold text-sm'>Frete Gratis</p>
          </div>
        </div>
      </ProductsSlideElement>

    </SwiperSlide>


  return (
    <SwiperContainer>
      <div className='flex flex-col items-center justify-center max-[750px]:px-0'>

        <div className='w-full px-7 max-[750px]:px-[15px]'>
          {props.title ? (
            <ProductsSectionTitleBox afterelementwidth={sectionTitleWidth}>
              <h3 ref={sectionTitleRef} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-lg max-[550px]:text-base'>{props.title}</h3>
              <p className='text-gray-900 font-semibold text-base cursor-pointer leading-none max-[550px]:text-sm max-[550px]:hidden'>Ver todos</p>
            </ProductsSectionTitleBox>
          ) : null}
        </div>

        <div className='px-7 w-full max-[750px]:px-0'>
          <div className='w-full relative overflow-x-visible'>
            <Swiper
              style={{
                width: '100%',
                height: 410,
                zIndex: 5,
                overflow: 'hidden',
                boxSizing: 'border-box',
                padding: '20px 6px 25px 6px',
              }}

              className='products-swiper'

              slidesPerView={'auto'}

              slidesPerGroupAuto={true}

              loop={false}

              navigation={{
                nextEl: `.${props.navigation?.nextEl}`,
                prevEl: `.${props.navigation?.prevEl}`,
              }}
              modules={[Navigation]}
              breakpoints={breakpoints}
            >
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
              {slideElement}
            </Swiper>
            <div className='absolute top-1/2 left-0 -translate-y-1/2 z-30 swiper-controllers w-full max-[800px]:hidden max-w-screen box-border'>
              <button className={`${props.navigation?.prevEl} absolute z-10 left-0 top-2/4 -translate-y-2/4 -translate-x-1/2 outline-none rounded-full w-14 h-14 flex justify-center items-center bg-base-color max-[900px]:w-12 max-[900px]:h-12`}>
                <Image
                  src={Arrow_left}
                  alt={'arrow left picture'}
                  width={500}
                  height={500}
                  className='w-6 h-auto object-cover max-[900px]:w-5'
                />
              </button>
              <button className={`${props.navigation?.nextEl} absolute top-2/4 z-20 -translate-y-2/4  translate-x-1/2 outline-none right-0 rounded-full bg-base-color w-14 h-14 flex justify-center items-center max-[900px]:w-12 max-[900px]:h-12`}>
                <Image
                  src={Arrow_right}
                  alt={'arrow left picture'}
                  width={500}
                  height={500}
                  className='w-6 h-auto object-cover max-[900px]:w-5'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SwiperContainer>
  );
};

