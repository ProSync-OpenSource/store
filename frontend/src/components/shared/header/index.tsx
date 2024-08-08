import { useState, useRef, MutableRefObject, useEffect } from "react";

import * as Style from '@/app/styles';

import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import MobileMenu from './mobileMenu/index';
import CategoryBar from './categoryBar/index';

export function Header() {
    const menuInputsRef: MutableRefObject<(null[] | HTMLElement[])> = useRef([null, null]);
    const [isOverlayActive, setIsOverlayActive] = useState(false);

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
                <header className="w-full text-white flex flex-col justify-start items-center">
                    <Style.HeaderNavBar>
                        <div className="w-fit">
                            <h1 className="text-white font-bold text-3xl flex items-baseline max-[800px]:hidden">ProSync</h1>
                            <Style.MobileMenu htmlFor="my-drawer" className="hidden">
                                <input type="checkbox" id="burger" ref={(e) => { menuInputsRef.current[1] = e }} />
                                <span></span>
                                <span></span>
                                <span></span>
                            </Style.MobileMenu>

                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-full flex flex-row m-auto items-center gap-x-2 bg-gray-100 rounded-md px-2 h-11">
                                <FiSearch className="text-gray-500 text-xl" />
                                <input
                                    className="w-full placeholder:text-gray-500 text-gray-900 bg-gray-100 font-medium text-lg outline-none max-[550px]:text-base"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Buscar produtos"
                                />
                            </div>
                        </div>
                        <nav>
                            <ul className="w-full flex flex-row gap-x-8 items-center justify-end ">

                                <li className="flex flex-row items-center gap-x-2 cursor-pointer max-[550px]:hidden">
                                    <IoMdHeartEmpty className="text-2xl"/>
                                </li>

                                <li className="max-[980px]:hidden cursor-pointer">
                                    <FiShoppingCart className="text-xl max-[550px]:text-[23px]" />
                                </li>

                                <li className="max-[550px]:hidden">
                                    <p className='text-2xl'>|</p>
                                </li>

                                <li className="relative cart-icon-box flex cursor-pointer gap-x-1 items-center">
                                    <RiUserLine className="text-[22px] max-[550px]:text-[23px] font-bold" />
                                    <IoIosArrowDown/>
                                </li>
                            </ul>
                        </nav>
                    </Style.HeaderNavBar>

                    <div className="bg-primary w-full px-10 flex justify-center items-center max-[900px]:hidden">
                       <CategoryBar setOverlay={setIsOverlayActive} overlay={isOverlayActive}/>
                    </div>

                    <Style.OverlayElement zIndex={isOverlayActive ? 40 : -10} opacity={isOverlayActive ? 0.3 : 0}></Style.OverlayElement>
                </header>
            </div>
            <div className="drawer-side z-[250]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <MobileMenu/>
            </div>
        </section>
    );
};