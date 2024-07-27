import { FeaturesContainer } from '@/components/pages/HomePage/style'
import Family_img from '@/public/assets/home/family_img.jpg'
import Kitchen_img from '@/public/assets/home/kitchen_img.jpg'
import Ball_img from '@/public/assets/home/tennis_ball_img.jpg'
import Woman_model_2 from '@/public/assets/home/woman_model_2.jpg'
import Image from 'next/image'

export function FeaturesSection() {
  return (
    <FeaturesContainer>
      <div className="min-h-full order-1 row-span-2 rounded-md overflow-hidden cursor-pointer relative">
        <Image
          src={Woman_model_2}
          alt={'woman picture'}
          width={500}
          height={500}
          className="w-full h-auto object-cover max-[750px]:object-bottom"
        />

        <div className="features-overlay">
          <h3 className="text-white font-semibold text-4xl max-[900px]:text-3xl max-[800px]:text-2xl">
            Estilo & Elegancia
          </h3>
          <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">
            Confira
          </button>
        </div>
      </div>

      <div className="order-2 rounded-md overflow-hidden cursor-pointer relative">
        <Image
          src={Ball_img}
          alt={'tennis ball'}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />

        <div className="features-overlay">
          <h3 className="text-white font-semibold text-4xl max-[900px]:text-3xl max-[800px]:text-2xl">
            Esportes & Lazer
          </h3>
          <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">
            Confira
          </button>
        </div>
      </div>

      <div className="order-3 grid grid-cols-2 gap-x-3">
        <div className="rounded-md overflow-hidden cursor-pointer relative">
          <Image
            src={Kitchen_img}
            alt={'kitchen picture'}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="features-overlay">
            <h3 className="text-white font-semibold text-2xl max-[900px]:text-xl max-[800px]:text-lg max-[700px]:text-sm">
              Eletrodomesticos
            </h3>
            <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">
              Confira
            </button>
          </div>
        </div>

        <div className="order-2 rounded-md overflow-hidden cursor-pointer relative">
          <Image
            src={Family_img}
            alt={'family picture'}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />

          <div className="features-overlay">
            <h3 className="text-white font-semibold text-2xl max-[900px]:text-xl max-[800px]:text-lg max-[700px]:text-sm">
              Familia
            </h3>
            <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">
              Confira
            </button>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  )
}
