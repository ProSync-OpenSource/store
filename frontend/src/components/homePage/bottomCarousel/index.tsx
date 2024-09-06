import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import Banner_1 from 'public/assets/home/bottom_banner_1.png';
import Mobile_Banner_1 from 'public/assets/home/bottom_banner_1_mobile.png';

import { SwiperContainer } from '@/components/homePage/styles';

import 'node_modules/swiper/swiper.css'
import 'node_modules/swiper/swiper.css'
import 'node_modules/swiper/modules/autoplay.css'

import { useState, useEffect } from 'react';

export default function BottomSlides() {
    const [pageWidth, setPageWidth] = useState(0);

    useEffect(() => {
        setPageWidth(window.innerWidth);
        window.addEventListener('resize', () => setPageWidth(window.innerWidth));
    },[]);

    const slideImages = [{
        img: pageWidth >= 750 ? Banner_1 : Mobile_Banner_1,
        alt: 'Texto ao lado da imagem de um homem em frente a tela do computador'
    }]

    const slideElement: JSX.Element[] =
        slideImages.map( (image, index) => (
            <SwiperSlide key={index}>
                <Image
                    src={image.img}
                    alt={image.alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit:'cover',
                    }}

                    className='min-[750px]:object-left max-[749px]:object-bottom'
                />
            </SwiperSlide>
        ));
    return (
        <SwiperContainer>
            <Swiper
                style={{
                    width: '100%',
                    zIndex: 5,
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    overflowX: 'hidden'
                }}

                className='h-auto max-[749px]:h-[410px]'

                slidesPerView={1}

                loop={true}

                autoplay={{
                    delay: 4000,
                }}

                pagination={{
                    clickable: false,
                }}

                modules={[Pagination, Autoplay]}
                spaceBetween={0}
            >
                {slideElement}
            </Swiper>
        </SwiperContainer>
    );
};