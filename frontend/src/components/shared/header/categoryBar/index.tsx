import React from 'react';

import CategoryMenu from '@/components/shared/header/categoryMenu/index';

import UserLocation from "../userLocation/index";

export default function categoryBar() {

    return (
        <div className='w-full flex flex-row items-center justify-between gap-x-12 my-2 overflow-x-hidden max-[750px]:mb-3'>
            
            <div>
                <UserLocation />
            </div>
            <nav className='w-fit flex max-[900px]:hidden'>
                <CategoryMenu/>

                <ul className='flex w-fit gap-x-12 text-base font-medium *:cursor-pointer items-center justify-start *:whitespace-nowrap box-border overflow-hidden'>
                    <li>Frete Grátis</li>
                    <li>Ofertas do Dia</li>
                    <li>Moda e Acessorios</li> 
                    <li>Novidades</li>
                    <li>Internacionais</li>
                    <li>Tecnologia</li>
                    <li>Moveis e Limpeza</li>
                    <li>Fitnees</li>
                    <li>Top mais vendidos</li>
                    <li>Alimentação e mercado</li>
                </ul>
            </nav>

        </div>
    );
};
