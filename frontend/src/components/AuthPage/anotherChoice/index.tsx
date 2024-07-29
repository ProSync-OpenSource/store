'use client';

import Image from 'next/image';

interface Props {
  isLogin: boolean;
}

export default function FormWrapper({isLogin}: Props) {
  return (
    <div className='bg-primary w-full h-72 p-10 lg:w-2/4 lg:h-screen relative'>
      <Image
        src={'/assets/auth/logoProSync.png'}
        alt={'Logo do ProSync.'}
        width={150}
        height={150}
      />
      <div className='mt-10 lg:mt-16 lg:ml-16 xl:mt-20 xl:mtl-20'>
        <p className='text-2xl xl:text-4xl'>{isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}</p>
        {isLogin ? (
          <a href="#" className='underline text-xl xl:text-2xl'>Criar conta!</a>
        ) : (
          <a href="#" className='underline text-xl xl:text-2xl'>Fazer login!</a>
        )}
      </div>
      <Image
        src={'/assets/auth/woman_model_1.png'}
        alt={'foto de uma mulher sorrindo apontando para criar conta.'}
        width={500}
        height={500}
        className='hidden w-[clamp(500px,35vw,600px)] lg:block absolute bottom-0 right-[calc(50%-250px)]'
      />
    </div>
  );
}