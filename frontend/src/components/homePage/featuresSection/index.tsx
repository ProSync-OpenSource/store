import { useState, useRef, useEffect, MutableRefObject } from "react";

import { FeaturesContainer, ProductsSectionTitleBox } from "@/components/homePage/styles";

import Family_img from '@@/public/assets/home/family_img.jpg';
import Kitchen_img from '@@/public/assets/home/kitchen_img.jpg';
import Ball_img from '@@/public/assets/home/tennis_ball_img.jpg';
import Woman_model_2 from '@@/public/assets/home/woman_model_2.jpg';

import Image from "next/image";

export default function FeaturesSection() {
    const [sectionTitleWidth, setSectionTitleWidth] = useState(0);
    const sectionTitleRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null)

    useEffect(() => {
        sectionTitleRef.current?.offsetWidth && 
          setSectionTitleWidth(sectionTitleRef.current.offsetWidth);
      },[sectionTitleRef]);

    return (
        <div className="px-10 max-[750px]:px-[15px]">

            <ProductsSectionTitleBox afterElementWidth={sectionTitleWidth}>
                <h3 ref={sectionTitleRef} className='text-gray-900 relative font-semibold text-xl top-0 py-2 max-[900px]:text-lg max-[550px]:text-base'>Confira os nossos destaques</h3>
                <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm max-[550px]:hidden'>Ver todos</p>
            </ProductsSectionTitleBox>

            <FeaturesContainer>
                <div className='min-h-full order-1 row-span-2 rounded-md overflow-hidden cursor-pointer relative'>
                    <Image
                        src={Woman_model_2}
                        alt={'black woman wearing a T-shirt and black glasses'}
                        width={500}
                        height={500}
                        className='w-full h-auto object-cover max-[750px]:object-bottom'
                    />
                    <div className="features-overlay">
                        <h4 className="text-white font-semibold text-4xl max-[900px]:text-2xl max-[800px]:text-2xl">Estilo & Elegancia</h4>
                        <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">Confira</button>
                    </div>
                </div>
                <div className='order-2 rounded-md overflow-hidden cursor-pointer relative'>
                    <Image
                        src={Ball_img}
                        alt={'yellow tennis ball'}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                    <div className="features-overlay">
                        <h4 className="text-white font-semibold text-3xl max-[900px]:text-2xl max-[800px]:text-2xl">Esportes & Lazer</h4>
                        <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">Confira</button>
                    </div>
                </div>
                <div className='order-3 grid grid-cols-2 gap-x-3'>
                    <div className='rounded-md overflow-hidden cursor-pointer relative'>
                        <Image
                            src={Kitchen_img}
                            alt={'kitchen furniture'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                        <div className="features-overlay">
                            <h4 className="text-white font-semibold text-2xl max-[900px]:text-base max-[800px]:text-lg max-[700px]:text-sm">Eletrodomesticos</h4>
                            <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">Confira</button>
                        </div>
                    </div>
                    <div className='order-2 rounded-md overflow-hidden cursor-pointer relative'>
                        <Image
                            src={Family_img}
                            alt={'Black family in the kitchen preparing breakfast'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                        <div className="features-overlay">
                            <h4 className="text-white font-semibold text-2xl max-[900px]:text-base max-[800px]:text-lg max-[700px]:text-sm">Familia</h4>
                            <button className="rounded-sm w-36 h-8 bg-primary text-white uppercase font-normal text-sm outline-none max-[900px]:text-[13px] max-[900px]:w-32 max-[800px]:w-28 max-[800px]:text-xs max-[800px]:font-medium">Confira</button>
                        </div>
                    </div>
                </div>
            </FeaturesContainer>
        </div>
    );
};