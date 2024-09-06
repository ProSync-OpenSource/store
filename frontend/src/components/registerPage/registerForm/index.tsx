import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";

/*Objeto onde defino todas a regras que os campos de input devem seguir*/
const registerSchema = z.object({
  email: z.string()
  .min(1,'Campo obrigatòrio')
    .max(40, 'Limite de caracteres atingido')
    .refine(value => /^[^\s@]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(value), {
      message: 'Informe um email vàlido'
    })
    .refine(value => /^[a-zA-Z0-9@.]+$/.test(value), {
      message: 'Evite caracteres especiais'
    }),
  password: z.string()
    .min(8, 'Caracteres minimos 8')
    .max(10, 'Limite de caracteres atingido')
    .refine(value => /^[a-zA-Z0-9@.]+$/.test(value), {
      message: 'Evite caracteres especiais'
    }),
  name: z.string()
    .min(3, 'Campo obrigatòrio')
    .max(40, 'Limite de caracteres atingido')
    .refine(value => /^[a-zA-Z\s]+$/.test(value), {
      message: 'Evite caracteres especiais ou numeros'
    })
})

type FormProps = z.infer<typeof registerSchema>;

export default function formLogin() {
  const [inputType, setInputType] = useState('password');

  const { handleSubmit, register, watch, formState: { errors } } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: ''
    }
  });

  const formValues = watch();

  /*Função que recebe os dados do usuario logo apos a validação*/
  const handleFormSumit = (userData: FormProps) => {
    console.log(userData);
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(handleFormSumit)}>
      <label htmlFor="name" className='text-black text-base font-medium mb-1'>Nome</label>
      <input
        type="text"
        placeholder="Nome completo"
        maxLength={41}
        className='text-base h-12 font-medium bg-transparent text-black border-2 border-gray-500 outline-none focus:border-primary p-2 rounded-lg placeholder:text-gray-500 lg:placeholder:text-sm'
        {...register('name')}
        style={{
          borderColor: errors.name && 'red'
        }}
      />
       {errors.name?.message && (
        <p className="text-red-500 font-medium mt-1 text-sm max-[620px]:static">{errors.name.message}</p>
      )}
      <label htmlFor="email" className='text-black text-base font-medium mt-4 mb-1'>Email</label>
      <input
        type="text"
        placeholder="Informe um email"
        className='text-base h-12 font-medium bg-transparent text-black border-2 border-gray-500 outline-none focus:border-primary p-2 rounded-lg placeholder:text-gray-500 lg:placeholder:text-sm'
        {...register('email')}
        maxLength={41}
        style={{
          borderColor: errors.email && 'red'
        }}
      />
      {errors.email?.message && (
        <p className="text-red-500 font-medium mt-1 text-sm max-[620px]:static">{errors.email.message}</p>
      )}
      <label htmlFor="password" className='text-black text-base font-medium mt-4 mb-1'>Senha</label>
      <div className="w-full relative">
        <input
          type={inputType}
          placeholder="Crie uma senha"
          className='text-base h-12 w-full font-medium bg-transparent text-black border-2 outline-none focus:border-primary border-gray-500 p-2 rounded-lg  placeholder:text-gray-500 lg:placeholder:text-sm'
          {...register('password')}
          maxLength={11}
          style={{
            borderColor: errors.password && 'red'
          }}
        />
        <IoEyeSharp style={{
            color: errors.password && 'red',
            display: formValues.password ? 'inline' : 'none'
          }}
          onClick={() => {setInputType(prev => prev === 'password' ? 'text' : 'password')}}  
          className="text-xl text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
      {errors.password?.message && (
        <p className="text-red-500 font-medium mt-1 text-sm max-[620px]:static">{errors.password.message}</p>
      )}
      <div className='mt-1'>
      </div>
      <button type="submit" className='bg-primary text-white btn focus:bg-primary text-sm rounded-lg mt-5 font-semibold outline-none hover:bg-primary'>Cadastrar</button>
    </form>
  );
}