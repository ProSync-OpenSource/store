import * as Style from './style';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isLogin: boolean;
}

export default function FormWrapper({children, isLogin}: Props) {
  return(
    <Style.WrapperForm>
      <h1 className='font-semibold text-3xl text-gray-800'>{isLogin?'Bem vindo(a) de volta!':'Bem vindo(a)!'}</h1>
      <p className='text-gray-500 mb-5'>{isLogin?'Preencha com suas credenciais para entrar na conta.':'Preencha com suas credenciais para criar sua conta.'}</p>
      {children}
      <div className="flex justify-center items-center mt-3 mb-3">
        <div className="w-full h-0.5 mr-4 bg-gray-300"></div>
        <span className="font-medium text-xl text-gray-500">ou</span>
        <div className="w-full h-0.5 ml-5 bg-gray-300"></div>
      </div>
      <div>
        {/* input sera trocado por component, deixei assim de placeholder enquanto não estudei OAuth */}
        <input type="button" className='w-full p-4 rounded-full border-gray-600 border mb-2' value={'Sign up with Facebook'}/>
        <input type="button" className='w-full p-4 rounded-full border-gray-600 border' value={'Sign up with Google'}/>
      </div>
      <p className='text-center mt-4 text-xl'>@ProSync</p>
    </Style.WrapperForm>
  );
}