import { FooterContainer } from "@/app/styles";

import Image from "next/image";

import Elo_card from '@@/public/assets/shared/elo_card.png';
import American_card from '@@/public/assets/shared/american_express.png';
import Boleto from '@@/public/assets/shared/boleto_img.png';
import Mastercard from '@@/public/assets/shared/mastercard.png';
import Pix from '@@/public/assets/shared/pix_img.png';
import Visa_card from '@@/public/assets/shared/visa_card.png';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="w-full order-1">
        <h5 className="font-bold text-white text-3xl max-[900px]:text-3xl max-[550px]:text-2xl">ProSync</h5>

        <div className="mt-8 flex flex-col justify-start items-start text-base text-white font-bold gap-y-3 max-[550px]:gap-y-2 max-[550px]:text-base">
          <p className="uppercase">Atendimento ao cliente</p>
          <p>SAC: <span className="font-normal">Serviço de Atendimento ao Consumidor</span></p>
          <p>E-mail: <span className="font-normal">suporte@prosync.com.br</span></p>
          <p>Whatsapp: <span className="font-normal">+55 00 0000-0000</span></p>

          <div className="w-full h-[2px] bg-orange-500 my-4 max-[550px]:h-[1px]"></div>

          <div className="flex flex-col text-base text-white font-normal justify-start items-start gap-y-3 max-[550px]:gap-y-2 max-[550px]:text-base">
            <p className="font-bold uppercase">Horario de Atendimento</p>
            <p>Seg a Sex: 09:00h ás 18:00h</p>
            <p>Sabados, Domingos e Feriados: 09:00h ás 13:00h</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center order-2 max-[550px]:justify-start">
        <div className="w-fit flex flex-col justify-center items-start gap-y-3 text-base text-white font-normal max-[550px]:gap-y-2 max-[550px]:text-base">
          <p className="font-bold uppercase">Departamentos</p>
          <p>Mais vendidos</p>
          <p>Beleza & Elegancia</p>
          <p>Casa</p>
          <p>Eletrodomesticos</p>
          <p>Familia</p>
          <p>Esportes & Lazer</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center order-3 max-[750px]:col-span-2 max-[550px]:justify-start max-[550px]:col-span-1">
        <div className="w-fit flex flex-col justify-center items-start gap-y-3 text-base text-white font-normal max-[550px]:gap-y-2 max-[550px]:text-base">
          <p className="font-bold uppercase">Contato</p>
          <p>Sobre nos - ProSync</p>
          <p>Trocas e Devoluções</p>
          <p>Termos de Serviço</p>
          <p>Politica de Privacidade</p>
          <p>Perguntas Frequentes</p>
        </div>
      </div>

      <div className="w-full col-span-3 mt-10 flex flex-row order-4 justify-between items-center gap-x-16 max-[750px]:col-span-2 max-[750px]:mt-0 max-[550px]:flex-col max-[550px]:col-span-1 max-[550px]:items-start max-[550px]:gap-y-10">
        <p className="text-sm font-medium text-gray-100">Preços e condições de pagamento exclusivas para compras neste site, podendo variar com o tempo da oferta. Evite comprar em lojas suspeitas ou de origem duvidosa, caso ache que esta sendo enganado ligue: 0800</p>

        <div className="flex min-w-52 flex-col justify-center items-center gap-y-4 max-[550px]:items-start">
          <p className="text-sm text-gray-100 text-center w-full font-medium whitespace-nowrap max-[550px]:text-left">Formas de pagamento</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={Visa_card}
                alt={'visa credit card'}
                width={500}
                height={500}
                className="w-9 h-auto object-cover max-[800px]:w-8"
              />
            </div>
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={Elo_card}
                alt={'elo credit card'}
                width={500}
                height={500}
                className="w-9 h-auto object-cover max-[800px]:w-8"
              />
            </div>
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={Mastercard}
                alt={'mastercard credit card'}
                width={500}
                height={500}
                className="w-9 h-auto object-cover max-[800px]:w-8"
              />
            </div>
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={American_card}
                alt={'american express card'}
                width={500}
                height={500}
                className="w-9 h-auto object-cover max-[800px]:w-8"
              />
            </div>
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={Pix}
                alt={'pix payment method'}
                width={500}
                height={500}
                className="w-10 h-auto object-cover max-[800px]:w-9"
              />
            </div>
            <div className="bg-base-color w-[60px] px-1 rounded-sm h-[33px] flex justify-center items-center max-[800px]:h-7">
              <Image
                src={Boleto}
                alt={'boleto payment method'}
                width={500}
                height={500}
                className="w-9 h-auto object-cover max-[800px]:w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};