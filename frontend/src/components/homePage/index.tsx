'use client'

import { MutableRefObject, useRef, useEffect, useState } from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import Shipping from '@@/public/assets/home/shipping_icon.png';
import Box from '@@/public/assets/home/box_icon.png';

import { TopSlides } from './topCarousel/index';
import { Header } from '@/components/shared/header';

const BottomSlides = dynamic(() => import('./bottomCarousel/index'));
const Footer = dynamic(() => import('@/components/shared/footer'));
const FeaturesSection = dynamic(() => import('./featuresSection/index'));
const ProductsModelTwo = dynamic(() => import('./productsCarousel/modelTwo/index'));
const ProductsModelOne = dynamic(() => import('./productsCarousel/modelOne/index'));

import * as Style from './styles';

interface SectionTitleProps {
    element1?: number
    element2?: number
    element3?: number
}

interface ProductProperties {
    product_title?: string
    product_image?: string
    product_price?: number
    offer?: number
    vote_average?: number
    installments?: number
    installments_price?: number
    stock_status?: string
}

export default function Home() {
    const productSectionTitleRef: MutableRefObject<(HTMLHeadingElement | null)[]> = useRef([])
    const [sectionTitleWidth, setSectionTitleWidth] = useState<SectionTitleProps>(
        {
            element1: 0,
            element2: 0,
            element3: 0
        }
    )

    const productOffersRef = useRef(null)

    const scrollIntoView = (elRef: MutableRefObject<(HTMLElement | null)>): void => {
        elRef &&
            elRef.current?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    const scrollToProductsOffers = (): void => {
        scrollIntoView(productOffersRef)
    }

    const products: ProductProperties[] = [{
        product_title: 'Relógio Smartwatch Intense 3.0 ISW-003',
        product_image: '/assets/home/smart_watch.png',
        product_price: 79.95,
        offer: 0.4,
        vote_average: 1550,
        installments: 12,
        installments_price: 6.65,
        stock_status: 'Em estoque'
    }, {
        product_title: 'Apple MacBook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial',
        product_image: '/assets/home/laptop.png',
    }];

    useEffect(() => {
        const getElementWidth = () => {
            productSectionTitleRef.current
                ? setSectionTitleWidth((prevState) => ({
                    ...prevState,
                    element1:
                        productSectionTitleRef.current[0]?.offsetWidth ??
                        prevState.element1,
                    element2:
                        productSectionTitleRef.current[1]?.offsetWidth ??
                        prevState.element2,
                    element3:
                        productSectionTitleRef.current[2]?.offsetWidth ??
                        prevState.element3
                }))
                : setTimeout(() => {
                    getElementWidth()
                }, 100)
        }

        getElementWidth();
    }, [productSectionTitleRef]);

    return (
        <Style.HomeContainer>
            <Header />

            <div className='bg-primary relative w-full overflow-x-hidden m-auto max-[800px]:mt-4 max-[800px]:bg-transparent'>
                <TopSlides onButtonClicked={scrollToProductsOffers} />
            </div>

            <div className='w-full bg-base-color pt-16 relative max-[1000px]:pt-20 max-w-[1480px] mx-auto max-[800px]:mt-5 max-[800px]:pt-0'>
                <div className='w-[calc(100%-80px)] bg-primary px-10 box-border rounded-md mx-auto text-base flex gap-x-32 h-12 z-[26] items-center justify-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 max-[1000px]:flex-col max-[1000px]:h-auto max-[1000px]:bg-transparent max-[1000px]:gap-y-3 max-[1000px]:px-0 max-[800px]:translate-y-0 max-[800px]:static max-[800px]:translate-x-0 max-[750px]:w-[calc(100%-30px)] max-[800px]:mb-7 max-[750px]:text-sm'>
                    <div className='w-full flex justify-end items-center bg-primary rounded-md gap-x-2 max-[1000px]:h-12 max-[1000px]:justify-center'>
                        <Image
                            src={Shipping}
                            alt={'delivery car icon'}
                            className='w-9 h-auto object-cover max-[900px]:w-8 max-[750px]:w-7 max-[550px]:w-6'
                        />
                        <p className='text-white whitespace-nowrap'><span className='font-semibold'>Frete Gratis</span> em milhares de produtos</p>
                    </div>

                    <div className='bg-primary rounded-md whitespace-nowrap h-full w-full flex items-center justify-start gap-3 max-[1000px]:h-12 max-[1000px]:justify-center'>
                        <Image
                            src={Box}
                            alt={'product box icon'}
                            className='w-9 h-auto object-cover max-[900px]:w-8 max-[750px]:w-7 max-[550px]:w-6'
                        />
                        <p><span className='font-semibold'>Devoluções Gratis</span> sem complicações</p>
                    </div>
                </div>

                <div className='w-full relative px-3 max-[750px]:px-0'>
                    <ProductsModelOne
                        productsData={products[0]}
                        navigation={{
                            nextEl: 'first-carousel-next',
                            prevEl: 'first-carousel-prev'
                        }}
                        title='Promoções selecionadas para você'
                    />
                </div>
            </div>

            <div className=' bg-base-color mt-5 overflow-x-hidden max-w-[1480px] mx-auto'>
                <div className='w-full relative flex items-center max-[940px]:flex-col'>
                    <ProductsModelTwo
                        productsData={products}
                        title='Ofertas do Dia'
                        navigation={{
                            nextEl: 'second-carousel-next',
                            prevEl: 'second-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className='w-full flex flex-col mt-3 max-w-[1480px] m-auto'>
                <FeaturesSection />
            </div>

            <div className='w-full bg-base-color mt-7 max-w-[1480px] mx-auto'>
                <div className='w-full relative px-3 max-[750px]:px-0'>
                    <ProductsModelOne
                        productsData={products[0]}
                        navigation={{
                            nextEl: 'third-carousel-next',
                            prevEl: 'third-carousel-prev'
                        }}
                        title='Os melhores em som e imagem'
                    />
                </div>

            </div>

            <div className='w-full my-8 px-10 flex justify-start max-w-[1480px] mx-auto max-[750px]:px-[15px]'>
                <BottomSlides />
            </div>

            <div className=' bg-base-color mt-4 overflow-x-hidden max-w-[1480px] mx-auto'>
                <div className='w-full relative flex items-center max-[940px]:flex-col'>
                    <ProductsModelTwo
                        productsData={products}
                        title='Top produtos mais vendidos'
                        navigation={{
                            nextEl: 'fourth-carousel-next',
                            prevEl: 'fourth-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className='w-full py-10 mt-5 bg-primary'>
                <Footer />
            </div>
        </Style.HomeContainer>
    );
};
