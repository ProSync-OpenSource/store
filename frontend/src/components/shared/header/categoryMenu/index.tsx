import { useContext, MutableRefObject, useRef } from "react";
import { GlobalContext } from "@/components/contexts/globalContext";

import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function CategoryMenu() {
    const global = useContext(GlobalContext);

    const categoryMenuRef: MutableRefObject<(null | HTMLDivElement)> = useRef(null);

    const handleCategoryMenu = (isMenuActive: boolean) => {
        global.setMenuController ? (
            global.setMenuController( prev => ({
                ...prev,
                isOverlayActive: isMenuActive,
                isCategoryMenuActive: isMenuActive
            }) )
        ) : null
    };

    return (
        <div ref={categoryMenuRef} onMouseOver={() => handleCategoryMenu(true)} onMouseOut={() => handleCategoryMenu(false)} className="hover:z-50 flex justify-start">
            <div style={{ color: global.menuController?.isCategoryMenuActive ? '#5D0C7B' : 'white' }} className='flex items-center text-base font-medium gap-x-3 hover:text-primary px-12'>
                <FiMenu className='text-xl' />
                Categorias
                <IoIosArrowDown style={{ transform: global.menuController?.isCategoryMenuActive ? 'rotate(180deg)' : 'rotate(0deg)' }} className='text-xl' />
            </div>

            <div style={{
                top: categoryMenuRef.current ? categoryMenuRef.current.offsetTop - 10 : 0,
                display: !categoryMenuRef.current ? 'none' : 'inline',
                width: categoryMenuRef.current ? categoryMenuRef.current.offsetWidth : 'auto',
            }}
                className='bg-white rounded-md w-fit h-auto pt-12 absolute top-12 overflow-hidden -z-10'
            >
                <ul className="*:font-medium *:text-sm *:text-black *:w-full *:py-3 *:pl-12 *:pr-16 *:row-span-5 *:cursor-pointer">
                    <li className="hover:bg-primary hover:text-white">Moda e Acessorios</li>
                    <li className="hover:bg-primary hover:text-white">Fitnees</li>
                    <li className="hover:bg-primary hover:text-white">Tecnologia</li>
                    <li className="hover:bg-primary hover:text-white">Moveis e Limpeza</li>
                    <li className="hover:bg-primary hover:text-white">Frete Gratis</li>
                    <li className="hover:bg-primary hover:text-white">Internacionais</li>
                    <li className="hover:bg-primary hover:text-white">Top mais vendidos</li>
                    <li className="hover:bg-primary hover:text-white">Ofertas do dia</li>
                    <li className="hover:bg-primary hover:text-white">Novidades</li>
                </ul>
            </div>
        </div>

    );
};