'use client';

import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from './registerForm/index';
import { WrapperForm, FormContainer } from "@/app/styles";

import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";

export default function AuthPage() {
  return (
    <section className='bg-white w-full h-dvh lg:min-h-screen flex justify-center items-start pb-9 lg:p-0 overflow-x-hidden lg:bg-primary lg:items-center'>
      <FormContainer>
        <div className='grid grid-cols-2 px-6 justify-between gap-x-3 py-7 lg:block w-full lg:w-2/4 lg:min-h-[650px] lg:p-0 relative bg-primary lg:bg-black'>
          
            <h2 className='font-semibold text-3xl text-start whitespace-nowrap lg:text-5xl z-20 lg:font-bold lg:absolute lg:bottom-28 lg:left-1/2 lg:-translate-x-1/2'>Prosync store</h2>

          <div className="flex justify-end">
            <Image
              src={'/assets/auth/prosync_logo.png'}
              alt={'Logo do ProSync.'}
              width={50}
              height={50}
              className='w-9 h-9 lg:w-12 lg:h-12 lg:absolute lg:top-10 lg:left-10 z-20 rounded-tl-lg rounded-bl-lg'
            />
          </div>

            <p className='text-base z-20 font-medium mt-5 text-center col-span-2 text-gray-200 lg:text-lg lg:text-center lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 whitespace-nowrap'>Seu novo e-commerce favorito <br/> para compras online!</p>

          <div className='hidden lg:block absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-transparent'></div>
          <div className='hidden lg:block absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent'></div>

          <Image
            src={'/assets/auth/woman_model_2.png'}
            alt={'foto de uma mulher sorrindo apontando para criar conta.'}
            width={500}
            height={500}
            className='w-full h-full object-cover hidden lg:block'
          />
        </div>
        <WrapperForm>
          <h1 className='font-semibold text-2xl text-gray-800 lg:text-4xl'>Criar conta</h1>
          <p className='font-medium text-base lg:text-sm text-gray-700 mt-2 mb-7'>Já possui uma? <Link href={'/login'}><span className='font-semibold text-primary underline cursor-pointer '>Entrar</span></Link></p>
          <RegisterForm />
          <div className="flex justify-center items-center my-4">
            <div className="w-full h-0.5 mr-4 bg-gray-300"></div>
            <span className="font-medium text-base text-gray-500">ou</span>
            <div className="w-full h-0.5 ml-5 bg-gray-300"></div>
          </div>
          <div className="flex gap-x-4 flex-col lg:flex-row">
            {/* input sera trocado por component, deixei assim de placeholder enquanto não estudei OAuth */}
            <button className='btn bg-transparent text-black focus:bg-transparent hover:bg-transparent lg:w-[calc(50%-8px)] h-[52px] rounded-full text-base font-medium border-gray-500 border-2 mb-3 flex justify-center items-center gap-x-2 outline-none'>
              <FcGoogle className="text-2xl"/>
              Google
            </button>
            <button style={{backgroundColor: '#106BFF'}} className='btn lg:w-[calc(50%-8px)] border-none h-[53px] rounded-full text-base font-medium text-white flex justify-center items-center gap-x-1 outline-none'>
              <CgFacebook className='text-2xl'/>
              Facebook
            </button>
          </div>
          <p className='text-center font-semibold mt-4 text-lg'>ProSync</p>
        </WrapperForm>
      </FormContainer>
    </section>
  );
}