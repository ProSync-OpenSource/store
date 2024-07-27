import Image from 'next/image'
import Woman_model_1 from '@@/public/assets/home/woman_model_1.png'
import '@@/node_modules/swiper/swiper.css'
import '@@/node_modules/swiper/swiper.css'
import '@@/node_modules/swiper/modules/autoplay.css'
import '@@/node_modules/swiper/modules/navigation.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Arrow_left from '@@/public/assets/home/arrow_left.png'
import Arrow_right from '@@/public/assets/home/arrow_right.png'
import {
  HeaderSlidesContainer,
  SwiperContainer
} from '@/components/pages/HomePage/style'

interface Props {
  onButtonClicked: () => void
}

export function TopSlides(props: Props) {
  const slideElement: JSX.Element = (
    <SwiperSlide className="h-full">
      <HeaderSlidesContainer>
        <div className="w-full h-full flex items-center flex-row justify-center min-[1400px]:justify-end">
          <div className="flex flex-col items-start gap-y-9 justify-center max-[750px]:items-center max-[800px]:gap-y-5 max-[500px]:gap-y-5">
            <h2 className="font-bold text-6xl text-white max-[1084px]:text-5xl max-[800px]:text-[37px] max-[750px]:text-center">
              Compre agora, <br />
              surpreenda-se!
            </h2>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-start justify-center pr-5 relative before:w-[1pt] before:h-[80%] before:bg-base-color before:absolute before:right-0 before:translate-x-2/4">
                <span className="text-white text-xl font-semibold max-[900px]:text-lg max-[800px]:text-base max-[550px]:text-sm">
                  50+
                </span>
                <span className="font-normal text-[17px] text-white max-[900px]:text-sm">
                  Categorias de produtos
                </span>
              </div>
              <div className="flex flex-col items-start justify-center pl-5">
                <span className="text-white text-xl font-semibold max-[900px]:text-lg max-[800px]:text-base max-[550px]:text-sm">
                  100M+
                </span>
                <span className="font-normal text-[17px] text-white max-[900px]:text-sm">
                  Clientes satisfeitos
                </span>
              </div>
            </div>
            <button
              onClick={props.onButtonClicked}
              className="btn bg-white text-primary w-52 hover:bg-white text-base outline-none max-[800px]:mt-3 max-[800px]:text-sm"
            >
              Conferir ofertas
            </button>
          </div>
        </div>

        <div className="w-full h-full flex items-end justify-center max-[900px]:justify-end max-[750px]:hidden min-[1400px]:justify-start">
          <Image
            src={Woman_model_1}
            alt={'woman picture'}
            height={500}
            width={600}
            className="w-auto h-full object-cover max-[800px]:h-[310px] max-[500px]:max-h-60"
          />
        </div>
      </HeaderSlidesContainer>
    </SwiperSlide>
  )

  return (
    <SwiperContainer>
      <Swiper
        style={{
          width: '100%',
          zIndex: 5,
          borderRadius: '8px',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
        className="h-[430px] max-[900px]:h-96 max-[800px]:h-80 max-[750px]:h-auto"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={{
          nextEl: '.btn-slide-next',
          prevEl: '.btn-slide-prev'
        }}
        autoplay={{
          delay: 4000
        }}
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
      >
        {slideElement}
        {slideElement}
        {slideElement}
        {slideElement}
      </Swiper>

      <div className="w-full max-[800px]:hidden">
        <button className="btn-slide-prev w-[75px] h-[75px] flex justify-center items-center bg-base-color before:w-[65px] before:h-[65px] max-[900px]:before:w-14 max-[900px]:before:h-14 before:bg-secondary before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-z-10 absolute top-2/4 z-10 -translate-y-2/4 outline-none left-0 -translate-x-2/4 rounded-full max-[900px]:w-[66px] max-[900px]:h-[66px]">
          <Image
            src={Arrow_left}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className="w-[23px] h-auto object-cover max-[900px]:w-5"
          />
        </button>

        <button className="btn-slide-next w-[75px] h-[75px] flex justify-center items-center bg-base-color before:w-[65px] before:h-[65px] max-[900px]:before:w-14 max-[900px]:before:h-14 before:bg-secondary before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-z-10 absolute top-2/4 z-10 -translate-y-2/4 outline-none right-0 translate-x-2/4 rounded-full max-[900px]:w-[66px] max-[900px]:h-[66px]">
          <Image
            src={Arrow_right}
            alt={'arrow left picture'}
            width={500}
            height={500}
            className="w-[23px] h-auto object-cover max-[900px]:w-5"
          />
        </button>
      </div>
    </SwiperContainer>
  )
}
