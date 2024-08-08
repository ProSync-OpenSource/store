import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import '@@/node_modules/swiper/swiper.css';
import '@@/node_modules/swiper/modules/pagination.css';
import '@@/node_modules/swiper/modules/autoplay.css';
import '@@/node_modules/swiper/modules/navigation.css';

import { SwiperContainer } from '@/components/homePage/styles';

type SwiperProps = {
    productsData?: any
}

export function ProductsModelTwo(props: SwiperProps) {

    const slideElement: JSX.Element =
        props.productsData &&
        <SwiperSlide style={{ width: 'auto' }}>
            <div className='bg-white w-full h-full flex flex-col p-5 items-center gap-y-5'>
                <div className='w-full flex justify-center items-center h-auto overflow-hidden'>
                    <Image
                        src={props.productsData.product_image}
                        alt={'black smart watch with amoled screen'}
                        width={500}
                        height={500}
                        className='w-52 h-auto object-cover max-[900px]:w-16'
                    />
                </div>

                <p className='text-gray-800 hover:text-primary hover:font-semibold cursor-pointer font-medium text-[16px] max-[900px]:text-[15px]'>{props.productsData.product_title}</p>
            </div>
        </SwiperSlide>

    return (
        <SwiperContainer>
            <div className='p-5'>
                <Swiper
                    style={{
                        width: '100%',
                        height: 360,
                        zIndex: 5,
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                        borderRadius: '8px',
                        boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.25),-4px 0px 10px -5px rgba(0, 0, 0, 0.3)',
                    }}
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
        </SwiperContainer>
    );
};

