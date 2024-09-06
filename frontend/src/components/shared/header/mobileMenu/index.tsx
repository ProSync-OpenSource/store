import { GoHome } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { PiTicket } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { TbCategoryMinus } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

import Link from "next/link";

export default function mobileMenu() {
    return (
        <div className="w-9/12 max-w-80 bg-base-color min-h-dvh flex flex-col gap-y-5">
            <div className="w-full h-28 bg-primary flex items-center pl-4">
                <div className="flex gap-x-3 items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                        <FaRegUser className="text-gray-800 text-2xl" />
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
                <ul className="flex flex-col gap-y-1 text-gray-900 text-[15px] font-medium *:flex *:flex-row *:items-center">
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><GoHome className="text-xl" /></div>
                        Inicio
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><IoBagOutline className="text-xl" /></div>
                        Minhas compras
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><MdOutlineLocalOffer className="text-xl" /></div>
                        Ofertas do dia
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><PiTicket className="text-xl" /></div>
                        Meus cupons
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><IoMdHeartEmpty className="text-xl" /></div>
                        Favoritos
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><GoBell className="text-xl" /></div>
                        Notificações
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><TbCategoryMinus className="text-xl" /></div>
                        Categorias
                    </li>
                    <li className="my-4"></li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><FaRegUser className="text-xl" /></div>
                        <Link href='login'>Criar conta</Link>
                    </li>
                    <li>
                        <div className="w-12 h-12 rounded-full flex justify-center items-center"><CgNotes className="text-xl" /></div>
                        Sobre o Prosync
                    </li>
                </ul>
            </div>
        </div>
    );
};