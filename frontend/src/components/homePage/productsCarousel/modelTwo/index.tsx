import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { useRef, MutableRefObject, useState, useEffect } from 'react';

import 'node_modules/swiper/swiper.css';
import 'node_modules/swiper/modules/pagination.css';
import 'node_modules/swiper/modules/autoplay.css';
import 'node_modules/swiper/modules/navigation.css';

import { ProductsSectionTitleBox, SwiperContainer } from '@/components/homePage/styles';
import ProductsModelOne from '@/components/homePage/productsCarousel/modelOne/index';

type SwiperProps = {
    productsData?: any;
    title?: string;
    navigation: { nextEl: string; prevEl: string };
}

export default function ProductsModelTwo(props: SwiperProps) {
    const [sectionTitleWidth, setSectionTitleWidth] = useState(0);

    const sectionTitleRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null)

    useEffect(() => {
        sectionTitleRef.current?.offsetWidth &&
            setSectionTitleWidth(sectionTitleRef.current.offsetWidth);
    }, [sectionTitleRef]);

    const slideElement: JSX.Element =
        props.productsData[1] &&
        <SwiperSlide style={{ width: 'auto' }}>
            <div className='bg-white w-full h-full flex flex-col p-5 items-center gap-y-5 max-[940px]:flex-row max-[650px]:flex-col'>
                <div className='w-full flex justify-center items-center h-auto overflow-hidden'>
                    <Image
                        src={props.productsData[1].product_image}
                        alt={'black smart watch with amoled screen'}
                        width={500}
                        height={500}
                        className='w-52 h-auto object-cover'
                    />
                </div>

                <p className='text-gray-800 hover:text-primary hover:font-semibold cursor-pointer font-medium text-[16px] max-[900px]:text-[15px]'>{props.productsData[1].product_title}</p>
            </div>
        </SwiperSlide>

    return (
        <SwiperContainer>

            <div className='w-full px-10 max-[750px]:px-[15px] max-[750px]:mb-4'>
                {props.title ? (
                    <ProductsSectionTitleBox afterelementwidth={sectionTitleWidth}>
                        <h3 ref={sectionTitleRef} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-lg max-[550px]:text-base'>{props.title}</h3>
                        <p className='text-gray-900 font-semibold text-base cursor-pointer leading-none max-[550px]:text-sm max-[550px]:hidden'>Ver todos</p>
                    </ProductsSectionTitleBox>
                ) : null}
            </div>

            <div className='flex items-center pr-3 pl-10 max-[940px]:flex-col max-[940px]:pl-3 max-[750px]:px-0'>
                <div className='py-5 relative w-96 max-[940px]:w-full max-[940px]:px-7 max-[750px]:px-[15px] max-[750px]:py-2'>
                    <Swiper
                        style={{
                            width: '100%',
                            height: 360,
                            zIndex: 5,
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                            borderRadius: '8px',
                        }}

                        className='second-products-swiper'

                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                        }}
                        loop={false}
                        modules={[Pagination, Autoplay]}
                    >
                        {slideElement}
                        {slideElement}
                        {slideElement}
                        {slideElement}
                        {slideElement}
                        {slideElement}
                    </Swiper>

                </div>

                <ProductsModelOne
                    productsData={props.productsData[0]}
                    navigation={{
                        nextEl: props.navigation?.nextEl,
                        prevEl: props.navigation?.prevEl
                    }}
                />
            </div>
        </SwiperContainer>
    );
};

