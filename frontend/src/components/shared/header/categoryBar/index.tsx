import React, { SetStateAction, MutableRefObject, useRef, Dispatch, useContext } from 'react';

import { UserContext } from '@/components/contexts/userContext';

import { CiLocationOn } from "react-icons/ci"
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import Categories from './categories';
import UserLocation from "../userLocation/index";

type Props = {
    setOverlay?: Dispatch<SetStateAction<boolean>>,
    overlay?: boolean,
}

export default function categoryBar(props: Props) {
    const categoryMenuRef: MutableRefObject<(null | HTMLDivElement)> = useRef(null);
    const user = useContext(UserContext);

    const handleCategoryMenu = (isMenuActive: boolean) => {
        categoryMenuRef.current &&
            props.setOverlay ? (
            isMenuActive ? (
                props.setOverlay(true)
            ) : (
                props.setOverlay(false)
            )
        ) : null
    };

    return (
        <div className='w-full flex flex-row items-center justify-between gap-x-12 my-2 overflow-x-hidden'>
            
            <div>
                <UserLocation />
            </div>
            <nav className='w-fit flex'>
                <div ref={categoryMenuRef} onMouseOver={() => handleCategoryMenu(true)} onMouseOut={() => handleCategoryMenu(false)} className="hover:z-50 flex justify-start">
                    <div style={{ color: props.overlay ? '#5D0C7B' : 'white' }} className='hover:z-55 flex items-center text-base font-medium gap-x-3 hover:text-primary px-12'>
                        <FiMenu className='text-xl' />
                        Categorias
                        <IoIosArrowDown style={{ transform: props.overlay ? 'rotate(180deg)' : 'rotate(0deg)' }} className='text-xl' />
                    </div>

                    <div style={{
                        top: categoryMenuRef.current ? categoryMenuRef.current.offsetTop - 10 : 0,
                        display: !categoryMenuRef.current ? 'none' : 'inline',
                        width: categoryMenuRef.current ? categoryMenuRef.current.offsetWidth : 'auto',
                    }}
                        className='bg-white rounded-md w-fit h-auto pt-12 absolute top-12 overflow-hidden -z-10'
                    >
                        <Categories />
                    </div>
                </div>

                <ul className='flex w-fit gap-x-12 text-base font-medium *:cursor-pointer items-center justify-start *:whitespace-nowrap box-border overflow-hidden'>
                    <li>Frete Grátis</li>
                    <li>Ofertas do Dia</li>
                    <li>Moda e Acessorios</li>
                    <li>Novidades</li>
                    <li>Internacionais</li>
                    <li>Tecnologia</li>
                    <li>Minhas Compras</li>
                    <li>Moveis e Limpeza</li>
                    <li>Fitnees</li>
                    <li>Top mais vendidos</li>
                </ul>
            </nav>

        </div>
    );
};
