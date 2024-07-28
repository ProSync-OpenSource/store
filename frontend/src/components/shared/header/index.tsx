import { useState, useRef, MutableRefObject, useEffect } from "react";

import * as Style from '@/app/styles';

import { FiSearch, FiShoppingCart } from "react-icons/fi";

import MobileMenu from './mobileMenu/index';
import CategoryBar from './categoryBar/index';

import { FaRegUser } from "react-icons/fa";

export interface DropDownProps {
    isDropDownActive?: boolean | undefined;
    isOverlayActive?: boolean | undefined;
}

export function Header() {
    const menuInputsRef: MutableRefObject<(null[] | HTMLElement[])> = useRef([null, null]);
    const [dropDownProps, setDropDownProps] = useState<DropDownProps>({
        isDropDownActive: false,
        isOverlayActive: false,
    });

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
                            <h1 className="text-white font-semibold text-[35px] flex items-baseline max-[800px]:hidden">ProSync</h1>
                            <Style.MobileMenu htmlFor="my-drawer">
                                <input type="checkbox" id="burger" ref={(e) => { menuInputsRef.current[1] = e }} />
                                <label htmlFor="" className="" onClick={() => { handleMenuClick() }}></label>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Style.MobileMenu>

                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-full flex flex-row m-auto items-center gap-x-2 bg-gray-100 rounded-lg px-2 h-11">
                                <FiSearch className="text-gray-800 text-xl" />
                                <input
                                    className="w-full placeholder:text-gray-800 text-gray-900 bg-gray-100 font-normal text-lg outline-none max-[550px]:text-base"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Procurando por algo ?"
                                />
                            </div>
                        </div>
                        <nav>
                            <ul className="w-full flex flex-row gap-x-5 items-center justify-end">

                                <li className="flex flex-row items-center gap-x-2 max-[550px]:hidden">
                                    <FaRegUser className="text-[20px] max-[800px]:cursor-pointer" />
                                    <p className='text-lg font-semibold cursor-pointer max-[800px]:hidden'>Login</p>
                                </li>

                                <li className="max-[980px]:hidden">
                                    <p className='font-semibold text-lg'>/</p>
                                </li>

                                <li className="cursor-pointer  max-[980px]:hidden">
                                    <p className='font-semibold text-lg'>Cadastro</p>
                                </li>

                                <li className="max-[550px]:hidden">
                                    <p className='font-semibold text-lg'>|</p>
                                </li>

                                <li className="relative cart-icon-box">
                                    <FiShoppingCart className="text-[20px] cursor-pointer max-[550px]:text-[23px]" />
                                    <p className='w-3 h-3 rounded-full bg-base-color absolute -top-2/4 -right-2/4 font-normal text-[8px] text-gray-900 flex items-center justify-center'>1</p>
                                </li>
                            </ul>
                        </nav>
                    </Style.HeaderNavBar>

                    <div className="bg-base-color w-full py-4 px-14 flex justify-center items-center max-[900px]:hidden">
                       <CategoryBar DropDownElements={setDropDownProps}/>
                    </div>

                    <Style.OverlayElement zIndex={dropDownProps.isDropDownActive ? 40 : -10} opacity={dropDownProps.isOverlayActive ? 0.3 : 0}></Style.OverlayElement>
                </header>
            </div>
            <div className="drawer-side z-[250]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <MobileMenu/>
            </div>
        </section>
    );
};