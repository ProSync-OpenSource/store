'use client'

import { MutableRefObject, useRef, useEffect, useState } from 'react';

import Image from 'next/image';

import Shipping from '@@/public/assets/home/shipping_icon.png';
import Box from '@@/public/assets/home/box_icon.png';

import { ProductsModelOne } from './productsCarousel/modelOne/index';
import { ProductsModelTwo } from './productsCarousel/modelTwo/index';
import { TopSlides } from './topCarousel/index';
import { Header } from '@/components/shared/header';
import { FeaturesSection } from './featuresSection/index';
import { BottomSlides } from './bottomCarousel/index';
import { Footer } from '@/components/shared/footer';

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

            <div className='bg-primary relative w-full overflow-x-hidden max-[900px]:mt-5'>
                <TopSlides onButtonClicked={scrollToProductsOffers} />
            </div>

            <div className='w-full bg-base-color pt-16 relative'>
                <div style={{ width: 'calc(100% - 80px' }} className='bg-primary px-10 box-border rounded-md m-auto text-base flex gap-x-32 h-12 z-[26] items-center justify-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                    <div className='w-full flex justify-end items-center gap-x-2'>
                        <Image
                            src={Shipping}
                            alt={'delivery car icon'}
                            className='w-9 h-auto object-cover'
                        />
                        <p className='text-white whitespace-nowrap'><span className='font-semibold'>Frete Gratis</span> em milhares de produtos</p>
                    </div>

                    <div className='bg-primary rounded-md whitespace-nowrap h-full w-full flex items-center justify-start gap-x-3'>
                        <Image
                            src={Box}
                            alt={'product box icon'}
                            className='w-9 h-auto object-cover'
                        />
                        <p><span className='font-semibold'>Devoluções Gratis</span> sem complicações</p>
                    </div>
                </div>

                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element1}>
                    <h3 ref={(e) => { productSectionTitleRef.current[0] = e }} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-[19px] max-[550px]:text-base'>Promoções selecionadas para você</h3>
                    <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative px-3'>
                    <ProductsModelOne
                        productsData={products[0]}
                        navigation={{
                            nextEl: 'first-carousel-next',
                            prevEl: 'first-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className=' bg-base-color mt-[30px] overflow-x-hidden'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element3} ref={productOffersRef}>
                    <h3 ref={(e) => { productSectionTitleRef.current[2] = e }} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-[19px] max-[550px]:text-base'>Ofertas do dia</h3>
                    <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative pr-3 pl-5 flex items-center'>
                    <div className='w-96'>
                        <ProductsModelTwo productsData={products[1]} />
                    </div>
                    <ProductsModelOne
                        productsData={products[0]}
                        navigation={{
                            nextEl: 'second-carousel-next',
                            prevEl: 'second-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className='w-full flex flex-col gap-y-8'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element2}>
                    <h3 ref={(e) => { productSectionTitleRef.current[1] = e }} className='text-gray-900 relative font-semibold text-xl top-0 py-2 max-[900px]:text-[19px] max-[550px]:text-base'>Confira os nossos destaques</h3>
                    <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                </Style.ProductsSectionTitleBox>

                <FeaturesSection />
            </div>

            <div className='w-full bg-base-color mt-[30px]'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element3} ref={productOffersRef}>
                    <h3 ref={(e) => { productSectionTitleRef.current[2] = e }} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-[19px] max-[550px]:text-base'>Os melhores em som e imagem</h3>
                    <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative px-3'>
                    <ProductsModelOne
                        productsData={products[0]}
                        navigation={{
                            nextEl: 'third-carousel-next',
                            prevEl: 'third-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className='w-full my-8 px-10 flex justify-start'>
                <BottomSlides />
            </div>

            <div className=' bg-base-color mt-[30px] overflow-x-hidden'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element3} ref={productOffersRef}>
                    <h3 ref={(e) => { productSectionTitleRef.current[2] = e }} className='text-gray-900 relative font-semibold text-xl py-2 max-[900px]:text-[19px] max-[550px]:text-base'>Top produtos mais vendidos</h3>
                    <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative pr-3 pl-5 flex items-center'>
                    <div className='w-96'>
                        <ProductsModelTwo productsData={products[1]} />
                    </div>
                    <ProductsModelOne
                        productsData={products[0]}
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
