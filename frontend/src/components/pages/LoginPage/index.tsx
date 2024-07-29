'use client';

import Image from 'next/image';
import LoginForm from './loginForm';
import * as Style from '../../pages/LoginPage/style';

export default function AuthPage() {
  return (
    <section className='w-full pb-5 bg-gray-100 lg:flex lg:p-0'>
      <div className='bg-primary w-full h-72 p-10 lg:w-2/4 lg:h-screen relative'>
        <Image
          src={'/assets/auth/logoProSync.png'}
          alt={'Logo do ProSync.'}
          width={150}
          height={150}
        />
        <div className='mt-10 lg:mt-16 lg:ml-16 xl:mt-20 xl:mtl-20'>
          <p className='text-2xl xl:text-4xl'>Ainda não tem uma conta?</p>
          <a href="#" className='underline text-xl xl:text-2xl'>Criar conta!</a>
        </div>
        <Image
          src={'/assets/auth/woman_model_1.png'}
          alt={'foto de uma mulher sorrindo apontando para criar conta.'}
          width={500}
          height={500}
          className='hidden w-[clamp(500px,35vw,600px)] lg:block absolute bottom-0 right-[calc(50%-250px)]'
        />
      </div>
      <Style.WrapperForm>
        <h1 className='font-semibold text-3xl text-gray-800'>Bem vindo&#40;a&#41; de volta!</h1>
        <p className='text-gray-500 mb-5'>Preencha com suas credenciais para entrar na conta.</p>
        <LoginForm />
        <div className="flex justify-center items-center mt-3 mb-3">
          <div className="w-full h-0.5 mr-4 bg-gray-300"></div>
          <span className="font-medium text-xl text-gray-500">ou</span>
          <div className="w-full h-0.5 ml-5 bg-gray-300"></div>
        </div>
        <div>
          {/* input sera trocado por component, deixei assim de placeholder enquanto não estudei OAuth */}
          <input type="button" className='w-full p-4 rounded-full border-gray-600 border mb-2' value={'Continue with Facebook'}/>
          <input type="button" className='w-full p-4 rounded-full border-gray-600 border' value={'Continue with Google'}/>
        </div>
        <p className='text-center mt-4 text-xl'>@ProSync</p>
      </Style.WrapperForm>
    </section>
  );
}