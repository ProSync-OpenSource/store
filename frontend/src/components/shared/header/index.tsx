import { useRef, MutableRefObject, useContext } from "react";

import Image from "next/image";

import { GlobalContext } from "@/components/contexts/globalContext";

import * as Style from '@/app/styles';

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiBell, FiMenu } from "react-icons/fi";

import MobileMenu from './mobileMenu/index';
import CategoryBar from './categoryBar/index';

import Prosync_logo from 'public/assets/shared/prosync_logo.png';

export function Header() {
    const menuInputsRef: MutableRefObject<(null[] | HTMLElement[])> = useRef([null, null]);

    const global = useContext(GlobalContext);

    const handleMenuClick = (): void => {
        if (menuInputsRef.current) {
            menuInputsRef.current[0]?.click();
            menuInputsRef.current[1]?.click();
        };
    };

    return (
        <section className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={(e) => { menuInputsRef.current[0] = e }} />
            <div className="drawer-content">
                <header className="w-full text-white flex flex-col justify-start items-center bg-primary">
                    <Style.HeaderNavBar>

                        <FiMenu onClick={() => handleMenuClick()} className="text-white text-[28px] cursor-pointer min-[900px]:hidden max-[900px]:order-1"/>
                        <div className="flex justify-center items-center gap-x-2 max-[900px]:order-2">
                            <h1 className="text-white w-fit font-bold text-3xl max-[1000px]:text-2xl ">ProSync</h1>
                            <Image
                                src={Prosync_logo}
                                alt='Image de logo do Prosync store'
                                className='w-6 h-auto hidden max-[900px]:inline'
                            />
                        </div>
                        
                        <div className='max-[900px]:order-4 max-[900px]:col-span-3 max-[900px]:mt-3'>
                            <div className="w-full flex justify-center">
                                <div className="w-full flex flex-row m-auto items-center gap-x-2 bg-gray-100 rounded-md px-2 h-11">
                                    <FiSearch className="text-gray-500 text-xl" />
                                    <input
                                        className="w-full placeholder:text-gray-500 text-gray-900 bg-gray-100 font-medium text-lg outline-none max-[1000px]:text-base max-[550px]:text-base"
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Buscar produtos"
                                    />
                                </div>
                            </div>
                        </div>

                        <nav className='max-[900px]:order-3'>
                            <ul className="w-full flex flex-row gap-x-8 items-center justify-end ">

                                <li className="flex flex-row items-center gap-x-2 cursor-pointer max-[980px]:hidden">
                                    <IoMdHeartEmpty className="text-2xl" />
                                </li>

                                <li className="cursor-pointer">
                                    <FiShoppingCart className="text-xl max-[550px]:text-[23px]" />
                                </li>

                                <li className="max-[550px]:hidden cursor-pointer">
                                    <FiBell className="text-[22px]"/>
                                </li>

                                <li className="flex items-center gap-x-1 cursor-pointer max-[550px]:hidden">
                                    <HiOutlineUserCircle className="text-[27px]" />
                                </li>
                            </ul>
                        </nav>
                    </Style.HeaderNavBar>

                    <div className="bg-primary w-full px-10 flex justify-center items-center max-w-[1400px] max-[750px]:px-[15px]">
                        <CategoryBar />
                    </div>

                    <Style.OverlayElement zindex={global.menuController?.isOverlayActive ? 40 : -10} opacity={global.menuController?.isOverlayActive ? 0.3 : 0}></Style.OverlayElement>
                </header>
            </div>
            <div className="drawer-side z-[250]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <MobileMenu />
            </div>
        </section>
    );
};