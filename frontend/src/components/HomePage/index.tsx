'use client';

import { MutableRefObject, useRef, useEffect, useState } from 'react';

import Image from 'next/image';

import Arrow_right from '@@/public/assets/home/arrow_right_black.png';

import { ProductsSlide } from './productsCarousel/index';
import { TopSlides } from './topCarousel/index';
import { Header } from '@/components/shared/header';
import { FeaturesSection } from './featuresSection/index';
import { BottomSlides } from './bottomCarousel/index';
import { Footer } from '@/components/shared/footer';

import * as Style from './styles';

interface SectionTitleProps {
    element1?: number;
    element2?: number;
    element3?: number;
};

interface ProductProperties {
    product_title?: string;
    product_image?: string;
    product_price?: number;
    offer?: number,
    vote_average?: number;
    installments?: number;
    installments_price?: number;
    stock_status?: string;
};

export default function Home() {
    const productSectionTitleRef: MutableRefObject<(HTMLHeadingElement | null)[]> = useRef([]);
    const [sectionTitleWidth, setSectionTitleWidth] = useState<SectionTitleProps>({
        element1: 0,
        element2: 0,
        element3: 0,
    });

    const productOffersRef = useRef(null);

    const scrollIntoView = (elRef: MutableRefObject<(HTMLElement | null)>): void => {
        elRef &&
            elRef.current?.scrollIntoView({
                behavior: 'smooth',
            });
    };

    const scrollToProductsOffers = (): void => {
        scrollIntoView(productOffersRef);
    };

    const products: ProductProperties = {
        product_title: 'Relógio Smartwatch Intense 3.0 ISW-003',
        product_image: '/assets/home/smart_watch.png',
        product_price: 79.95,
        offer: 0.4,
        vote_average: 1550,
        installments: 12,
        installments_price: 6.65,
        stock_status: 'Em estoque',
    };

    useEffect(() => {
        const getElementWidth = () => {
            productSectionTitleRef.current ? (
                setSectionTitleWidth(prevState => ({
                    ...prevState,
                    element1: productSectionTitleRef.current[0]?.offsetWidth ?? prevState.element1,
                    element2: productSectionTitleRef.current[1]?.offsetWidth ?? prevState.element2,
                    element3: productSectionTitleRef.current[2]?.offsetWidth ?? prevState.element3,
                }))
            ) : (
                setTimeout(() => {
                    getElementWidth()
                }, 100)
            )
        };

        getElementWidth();
    }, [productSectionTitleRef]);

    return (
        <Style.HomeContainer>
            <Header />

            <div className='bg-base-color w-full gap-x-0 overflow-hidden mb-[30px] mt-3 max-[900px]:mt-5'>
                <TopSlides onButtonClicked={scrollToProductsOffers} />
            </div>

            <div className='w-full bg-base-color'>
                <Style.ProductsSectionTitleBox
                    afterElementWidth={sectionTitleWidth.element1}
                >
                    <h3 ref={(e) => { productSectionTitleRef.current[0] = e }} className='text-gray-900 relative font-semibold text-[22px] py-3 max-[900px]:text-[19px] max-[550px]:text-base'>Da loja para a sua casa</h3>
                    <div className='flex flex-row place-items-center justify-center gap-x-1 cursor-pointer'>
                        <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                        <Image
                            src={Arrow_right}
                            alt={'arrow left picture'}
                            width={500}
                            height={500}
                            className='w-[12px] h-auto object-cover translate-y-[1px] max-[550px]:hidden'
                        />
                    </div>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative'>
                    <ProductsSlide
                        productsData={products}
                        navigation={{
                            nextEl: 'first-carousel-next',
                            prevEl: 'first-carousel-prev'
                        }}
                    />
                </div>

            </div>

            <div className='w-full flex flex-col gap-y-10'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element2}>
                    <h3 ref={(e) => { productSectionTitleRef.current[1] = e }} className='text-gray-900 relative font-semibold text-[22px] top-0 py-3 max-[900px]:text-[19px] max-[550px]:text-base'>Confira os nossos destaques</h3>
                    <div className='flex flex-row place-items-center justify-center gap-x-1 cursor-pointer'>
                        <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                        <Image
                            src={Arrow_right}
                            alt={'arrow left picture'}
                            width={500}
                            height={500}
                            className='w-[12px] h-auto object-cover translate-y-[1px] max-[550px]:hidden'
                        />
                    </div>
                </Style.ProductsSectionTitleBox>

                <FeaturesSection />
            </div>

            <div className='w-full bg-base-color mt-[30px]'>
                <Style.ProductsSectionTitleBox afterElementWidth={sectionTitleWidth.element3} ref={productOffersRef}>
                    <h3 ref={(e) => { productSectionTitleRef.current[2] = e }} className='text-gray-900 relative font-semibold text-[22px] py-3 max-[900px]:text-[19px] max-[550px]:text-base'>Ofertas do dia para você</h3>
                    <div className='flex flex-row place-items-center justify-center gap-x-1 cursor-pointer'>
                        <p className='text-gray-900 font-semibold text-base leading-none max-[550px]:text-sm'>Ver todos</p>
                        <Image
                            src={Arrow_right}
                            alt={'arrow left picture'}
                            width={500}
                            height={500}
                            className='w-[12px] h-auto object-cover translate-y-[1px] max-[550px]:hidden'
                        />
                    </div>
                </Style.ProductsSectionTitleBox>

                <div className='w-full relative'>
                    <ProductsSlide
                        productsData={products}
                        navigation={{
                            nextEl: 'second-carousel-next',
                            prevEl: 'second-carousel-prev'
                        }}
                    />
                </div>
            </div>

            <div className='w-screen mb-16 mt-10'>
                <BottomSlides />
            </div>

            <div className='w-full py-10 bg-primary'>
                <Footer />
            </div>
        </Style.HomeContainer>
    );
};