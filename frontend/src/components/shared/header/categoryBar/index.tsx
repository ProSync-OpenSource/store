import * as Style from '@/app/styles';

import React, { useState, useEffect, SetStateAction } from 'react';

import { DropDownProps } from '@/components/shared/header/index';

import { IoIosArrowDown } from "react-icons/io";
import { BiSolidUpArrow } from "react-icons/bi";

interface DropDownElementProps {
    isAnyDropDownActive: boolean,
    isOverlayActive: boolean,
};

interface Props {
    DropDownElements?: React.Dispatch<SetStateAction<DropDownProps>>;
};

export default function categoryBar(props: Props) {

    const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<DropDownElementProps>({
        isAnyDropDownActive: false,
        isOverlayActive: false,
    });

    useEffect(() => {
        isDropDownMenuActive.isAnyDropDownActive ? (
            !isDropDownMenuActive.isOverlayActive &&
            props.DropDownElements &&
            props.DropDownElements(() => ({
                isDropDownActive: true,
                isOverlayActive: true,
            }))
        ) : (
            props.DropDownElements &&
            props.DropDownElements((prev) => ({
                ...prev,
                isOverlayActive: false,
            })),
            setTimeout(() => {
                props.DropDownElements &&
                    props.DropDownElements((prev) => ({
                        ...prev,
                        isDropDownActive: false,
                    }))
            }, 100)
        )

    }, [isDropDownMenuActive.isAnyDropDownActive]);

    const categoryItems = [
        {
            categoryName: 'Tecnologia',
            subCategories: {
                'Desktops & Laptops': 'none',
                'Dispositivos moveis': 'none',
                'Acessorios & AI': 'none',
                'Software & Hardware': 'none',
                'Laptops & Desktops': 'none',
                'Celulares': 'none',
                'AI & Acessorios': 'none',
                'Hardware & Software': 'none',
                'Smart Tvs': 'none',
            }
        }
    ];

    const categoryLinks = (items: Record<string, string>) => {
        const itemsList: JSX.Element[] = [];
        for (let key in items) {
            itemsList.push(<li style={{ width: '100%' }} key={key} className='hover:text-white px-2 hover:bg-primary'>{key}</li>)
        };
        return itemsList;
    };

    const categoryBtn = (name: string, items: Record<string, string>) => {
        return (
            <Style.CategoryListItem
                onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, isAnyDropDownActive: true, }))}
                onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, isAnyDropDownActive: false }))}
            >
                <p className='h-5 leading-none text-[16px]'>{name}</p>
                <IoIosArrowDown />
                <div className='drop-down-menu absolute top-full z-40 left-0 min-w-full overflow-y-hidden max-[900px]:hidden'>
                    <div className='bg-white mt-2 rounded-md py-2 px-1 relative'>
                        <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                        
                        <ul className='w-auto flex flex-col items-start justify-start gap-y-1 overflow-hidden *:text-gray-700 *:font-medium *:text-[15px] *:py-1 *:rounded-[4px] *:whitespace-nowrap'>
                            {categoryLinks(items)}
                        </ul>
                    </div>
                </div>
            </Style.CategoryListItem>
        );
    };

    return (
        <nav className='w-full flex justify-center items-center'>
            <Style.CategoryList>
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}                
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}                
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}                
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}                
                {categoryBtn(categoryItems[0].categoryName, categoryItems[0].subCategories)}                
            </Style.CategoryList>
        </nav>
    );
};
