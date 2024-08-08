import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import Smart_watch from '@@/public/assets/home/smart_watch.png'

import { SwiperContainer } from '@/components/homePage/styles';

import '@@/node_modules/swiper/swiper.css'
import '@@/node_modules/swiper/swiper.css'
import '@@/node_modules/swiper/modules/autoplay.css'

export function BottomSlides() {

    const slideElement: JSX.Element = <SwiperSlide>
        <div className=' w-full h-full relative grid grid-cols-2 bg-primary gap-y-3 max-[670px]:grid-cols-1 max-[670px]:pb-12 max-[670px]:pt-4 min-[1400px]:gap-x-28'>
            <div className='w-full h-full flex items-center justify-center z-10 min-[1400px]:justify-end'>
                <Image
                    src={Smart_watch}
                    alt={'black smart watch with amoled screen'}
                    width={500}
                    height={500}
                    className='w-52 h-auto max-[900px]:w-44 max-[800px]:w-40 max-[670px]:w-36 max-[550px]:w-28'
                />
            </div>

            <div className='flex flex-row items-center justify-start z-10 max-[670px]:justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold leading-tight text-white text-center uppercase max-[900px]:text-lg max-[550px]:text-base'>
                        Dia dos pais <br />
                        <span className='text-3xl max-[900px]:text-2xl max-[550px]:text-xl'>Celebre da melhor forma</span>
                    </h2>
                    <div className='flex flex-row justify-center items-center gap-x-4 mt-3'>
                        <div className='bg-orange-500 w-32 h-14 text-white flex flex-col items-center justify-center rounded-2xl leading-none font-medium uppercase max-[800px]:h-12'>
                            <p className='text-xs leading-none'>Ate</p>
                            <p className='text-3xl font-bold max-[800px]:text-2xl max-[550px]:text-xl'>
                                50% <b />
                                <span className='font-light text-2xl max-[800px]:text-[22px] max-[550px]:text-[19px]'>
                                    Off
                                </span>
                            </p>
                        </div>
                        <div className='bg-orange-500 w-36 h-14 text-white flex flex-col items-center justify-center rounded-lg leading-none font-medium uppercase max-[800px]:h-12'>
                            <p className='text-xs leading-none'>Ative os</p>
                            <p className='text-2xl font-bold max-[800px]:text-xl max-[550px]:text-lg'>Cupons</p>
                        </div>
                    </div>
                    <p className='text-xs font-medium text-gray-100 text-center mt-12'>*Cupom aplicavel para produtos selecionados <br /> Consulte os termos e condições</p>
                </div>
            </div>
        </div>
    </SwiperSlide>

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

                className='h-[300px] max-[800px]:h-[270px] max-[670px]:h-auto'

                slidesPerView={1}

                loop={true}

                autoplay={{
                    delay: 4000,
                }}

                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Autoplay]}
                spaceBetween={0}
            >
                {slideElement}
                {slideElement}
                {slideElement}
                {slideElement}
                {slideElement}
                {slideElement}
                {slideElement}
            </Swiper>
        </SwiperContainer>
    );
};