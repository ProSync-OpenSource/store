import { useState, useEffect, useRef, MutableRefObject } from "react";

import * as Style from '@/app/styles';

import { FiSearch, FiShoppingCart } from "react-icons/fi";

import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { PiTicket } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { TbCategoryMinus } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";

interface DropDownElementProps {
    firstDropDown: boolean,
    secondDropDown: boolean,
    thirdDropDown: boolean,
    fourthDropDown: boolean,
    fifthDropDown: boolean,
    sixthDropDown: boolean,
    isAnyDropDownActive: boolean,
    isOverlayActive: boolean,
}

export function Header() {
    const menuInputsRef: MutableRefObject<(null[] | HTMLElement[])> = useRef([null, null]);
    const [isDropDownMenuActive, setIsDropDownMenuActive] = useState<DropDownElementProps>({
        firstDropDown: false,
        secondDropDown: false,
        thirdDropDown: false,
        fourthDropDown: false,
        fifthDropDown: false,
        sixthDropDown: false,
        isAnyDropDownActive: false,
        isOverlayActive: false,
    });

    const handleMenuClick = (): void => {
        if (menuInputsRef.current) {
            menuInputsRef.current[0]?.click();
            menuInputsRef.current[1]?.click();
        };
    };

    useEffect(() => {
        isDropDownMenuActive.isAnyDropDownActive ? (
            setIsDropDownMenuActive(prevState => ({
                ...prevState,
                isOverlayActive: true,
            }))
        ) : (
            setTimeout(() => {
                setIsDropDownMenuActive(prevState => ({
                    ...prevState,
                    isOverlayActive: false,
                }));
            }, 100)
        )

    }, [isDropDownMenuActive.isAnyDropDownActive]);

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
                                    <span className='text-lg font-semibold cursor-pointer max-[800px]:hidden'>Login</span>
                                </li>

                                <li className="max-[980px]:hidden">
                                    <span className='font-semibold text-lg'>/</span>
                                </li>

                                <li className="cursor-pointer  max-[980px]:hidden">
                                    <span className='font-semibold text-lg'>Cadastro</span>
                                </li>

                                <li className="max-[550px]:hidden">
                                    <span className='font-semibold text-lg'>|</span>
                                </li>

                                <li className="relative cart-icon-box">
                                    <FiShoppingCart className="text-[20px] cursor-pointer max-[550px]:text-[23px]" />
                                    <div className='w-3 h-3 rounded-full bg-base-color absolute -top-2/4 -right-2/4 font-normal text-[8px] text-gray-900 flex items-center justify-center'>1</div>
                                </li>
                            </ul>
                        </nav>
                    </Style.HeaderNavBar>

                    <div className="bg-base-color w-full py-4 px-14 flex justify-center items-center max-[900px]:hidden">
                        <nav className='w-full flex justify-center items-center'>
                            <Style.CategoryList>
                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, firstDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, firstDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.firstDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Casa</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.firstDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='bg-white mt-2 rounded-md py-2 px-1 relative'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1 overflow-hidden'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Decoração e Acessórios</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Mobiliário</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Eletrônicos Domésticos</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Limpeza e Organização</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Ferramentas e Equipamentos</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 rounded-[4px] hover:text-white px-2 hover:bg-primary whitespace-nowrap'>Higiene Pessoal e Beleza</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, secondDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, secondDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.secondDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Esportes</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.secondDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='py-2 px-1 bg-white mt-2 relative rounded-md'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Roupas e Calçados</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Acessórios Esportivos:</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, thirdDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, thirdDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.thirdDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Moda</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.thirdDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='p-1 bg-white mt-2 relative rounded-lg'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Mundo feminino</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Melhores marcas</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Em alta</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Moda Masculina</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Roupas Infantis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, fourthDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, fourthDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.fourthDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Tecnologia</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.fourthDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='p-1 bg-white mt-2 relative rounded-lg'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Computadores e Periféricos</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Eletrônicos Portáteis</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Software e Jogos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, fifthDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, fifthDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.fifthDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Fitness</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.fifthDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='p-1 bg-white mt-2 relative rounded-lg'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Acessórios fitness</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Suplementos nutricionais</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Equipamentos de treino</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                                <Style.CategoryListItem onMouseEnter={() => setIsDropDownMenuActive(prevState => ({ ...prevState, sixthDropDown: true, isAnyDropDownActive: true, }))} onMouseLeave={() => setIsDropDownMenuActive(prevState => ({ ...prevState, sixthDropDown: false, isAnyDropDownActive: false }))} zIndex={isDropDownMenuActive.sixthDropDown ? 50 : 10}>
                                    <span className='h-5 leading-none text-[16px]'>Ofertas</span>
                                    <IoIosArrowDown />
                                    <div style={isDropDownMenuActive.sixthDropDown ? { maxHeight: '400px' } : { maxHeight: '0px' }} className='absolute top-full z-40 left-0 min-w-full overflow-y-hidden ease-out duration-100 max-[900px]:hidden'>
                                        <div className='p-1 bg-white mt-2 relative rounded-lg'>
                                            <BiSolidUpArrow className="absolute top-0 left-5 text-white -translate-y-3/4" />
                                            <ul className='w-auto flex flex-col items-start justify-start gap-y-1'>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white'>Ofertas do dia</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Moda em promoção</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Descontos em fretes</li>
                                                <li style={{ width: '100%' }} className='text-gray-700 font-medium text-[15px] py-1 px-2 rounded-[4px] hover:bg-primary hover:text-white whitespace-nowrap'>Economize com limpeza</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Style.CategoryListItem>

                            </Style.CategoryList>
                        </nav>
                    </div>

                    <Style.OverlayElement zIndex={isDropDownMenuActive.isOverlayActive ? 40 : -10} opacity={isDropDownMenuActive.isAnyDropDownActive ? 0.3 : 0}></Style.OverlayElement>
                </header>
            </div>
            <div className="drawer-side z-[250]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="w-9/12 max-w-80 bg-base-color min-h-dvh flex flex-col gap-y-5">
                    <div className="w-full h-28 bg-primary flex items-center pl-4">
                        <div className="flex gap-x-3 items-center">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                                <FaRegUser className="text-black text-2xl"/>
                            </div> 

                            <div>
                                <h3 className="text-lg font-medium">Novo Usuario</h3>
                                <div>
                                    <p className="text-sm font-normal">Ir para o perfil</p>
                                </div>
                            </div>                           
                        </div>
                    </div>

                    <div className="pl-4">
                        <ul className="flex flex-col gap-y-1 text-black text-[15px] font-medium *:flex *:flex-row *:items-center">
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><GoHome className="text-xl"/></div>
                                Inicio
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><IoBagOutline className="text-xl"/></div>
                                Minhas compras
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><MdOutlineLocalOffer className="text-xl"/></div>
                                Ofertas do dia
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><PiTicket className="text-xl"/></div>
                                Meus cupons
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><IoMdHeartEmpty className="text-xl"/></div>
                                Favoritos
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><GoBell className="text-xl"/></div>
                                Notificações
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><TbCategoryMinus className="text-xl"/></div>
                                Categorias
                            </li>
                            <li className="my-4"></li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><FaRegUser className="text-xl"/></div>
                                Criar conta
                            </li>
                            <li>
                                <div className="w-12 h-12 rounded-full flex justify-center items-center"><CgNotes className="text-xl"/></div>
                                Sobre o Prosync
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};