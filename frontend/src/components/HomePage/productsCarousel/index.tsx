import Image from 'next/image';

import { FaStar } from "react-icons/fa";

import Arrow_left from '@@/public/assets/home/arrow_left.png';
import Arrow_right from '@@/public/assets/home/arrow_right.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import '@@/node_modules/swiper/swiper.css';
import '@@/node_modules/swiper/modules/pagination.css';
import '@@/node_modules/swiper/modules/autoplay.css';
import '@@/node_modules/swiper/modules/navigation.css';

import { ProductsSlideElement, SwiperContainer } from '@/components/homePage/styles';

type SwiperProps = {
    productsData?: any,
    navigation?: { nextEl: string, prevEl: string },
}

export function ProductsSlide(props: SwiperProps) {
    const breakpoints = {
        300: {
            spaceBetween: 15
        },
        600: {
            spaceBetween: 20
        },
        900: {
            spaceBetween: 30
        },
    };

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

                        <div className='w-full flex flex-row items-center gap-x-3'>
                            <div className='flex flex-row items-center justify-start gap-[5px]'>
                                <FaStar className='text-orange-400 text-sm' />
                                <FaStar className='text-orange-400 text-sm' />
                                <FaStar className='text-orange-400 text-sm' />
                                <FaStar className='text-orange-400 text-sm' />
                                <FaStar className='text-gray-400 text-sm' />
                            </div>
                            <p className='text-gray-800 font-medium text-sm max-[900px]:text-[13px]'>{props.productsData.vote_average}</p>
                        </div>

                        {props.productsData.offer ? (

                            <>
                                <p className='text-gray-500 text-sm font-medium mt-1 leading-tight line-through max-[900px]:text-[13px]'>R${props.productsData.product_price}</p>
                                <p className='text-gray-800 font-bold text-[27px] leading-tight'>R${`${(props.productsData.product_price * (1 - props.productsData.offer)).toFixed(2)}`.replace('.', ',')}</p>
                            </>

                        ) : (

                            <p className='text-gray-800 font-bold text-[27px] leading-tight'>R$ {`${props.productsData.product_price}`.replace('.', ',')}</p>

                        )}

                        <p className='w-full text-gray-500 font-normal text-sm relative max-[900px]:text-[13px]'>
                            Em {props.productsData.installments}x de <span className='text-gray-950'>
                                R${`${props.productsData.installments_price}`.replace('.', ',')}
                            </span>

                            <span className='text-green-600 font-medium text-sm absolute bottom-0 right-[10px] max-[900px]:text-[13px] max-[550px]:right-0'>
                                {props.productsData.stock_status}
                            </span>

                        </p>
                    </div>
                </div>

                <div className='absolute top-2 left-2'>
                    {props.productsData.offer ? (
                        <p className='bg-primary text-white text-xs font-medium rounded-3xl px-3 py-[3px]'>
                            {props.productsData.offer * 100}% OFF
                        </p>
                    ) : null}
                </div>
            </ProductsSlideElement>

        </SwiperSlide>


    return (
        <SwiperContainer>
            <Swiper
                style={{
                    width: '100%',
                    height: 380,
                    zIndex: 5,
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    padding: '30px 5px',
                }}

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

            <div className='w-full max-[800px]:hidden'>
                <button className={`${props.navigation?.prevEl} absolute z-10 left-0 top-2/4 -translate-y-2/4 outline-none -translate-x-2/4 rounded-full w-14 h-14 flex justify-center items-center bg-base-color max-[900px]:w-12 max-[900px]:h-12`}>
                    <Image
                        src={Arrow_left}
                        alt={'arrow left picture'}
                        width={500}
                        height={500}
                        className='w-6 h-auto object-cover max-[900px]:w-5'
                    />
                </button>

                <button className={`${props.navigation?.nextEl} absolute top-2/4 z-20 -translate-y-2/4 outline-none right-0 translate-x-2/4 rounded-full bg-base-color w-14 h-14 flex justify-center items-center max-[900px]:w-12 max-[900px]:h-12`}>
                    <Image
                        src={Arrow_right}
                        alt={'arrow left picture'}
                        width={500}
                        height={500}
                        className='w-6 h-auto object-cover max-[900px]:w-5'
                    />
                </button>
            </div>
        </SwiperContainer>
    );
};