import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { IoIosClose } from "react-icons/io";

import { CiLocationOn } from "react-icons/ci"
import { MutableRefObject, useRef, useState, useEffect, useContext } from "react";

import { UserContext } from '@/components/contexts/userContext';

import GetLocationData from '@/components/shared/header/api/index';

const schemaForm = z.object({
    zipCode: z.string().min(8, 'Digite um CEP valido').refine(value => /^[0-9]+$/.test(value), {
        message: 'Digite apenas numeros',
    })
});

type FormProps = z.infer<typeof schemaForm>

export type UserProps = {
    zipCode?: string;
    isAllowed?: boolean;
    isAddressAvailable?: boolean;
    fetchError?: boolean;
    errorMessage?: string;
};

export default function UserLocation() {
    const checkboxInputRef: MutableRefObject<(HTMLInputElement | null)> = useRef(null);

    const userData = useContext(UserContext);

    const [user, setUser] = useState<UserProps>({
        isAllowed: false,
        zipCode: '',
        isAddressAvailable: false,
        fetchError: false,
    });

    const { handleSubmit, register, setValue, setError ,formState: { errors } } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForm),
        defaultValues: {
            zipCode: ''
        }
    });

    const handleFormSubmit = (data: FormProps) => {
        setUser(() => ({
            isAllowed: true,
            zipCode: data.zipCode,
        }));
    };

    useEffect(() => {
        checkboxInputRef.current &&
            user.isAddressAvailable &&
            checkboxInputRef.current.click();
    }, [user.isAddressAvailable]);

    useEffect(() => {
        user.fetchError ? (
            setError( 'zipCode', {
                type: 'manual',
                message: user.errorMessage
            })
        ) : (
            setError( 'zipCode', {} )
        )
    },[user.fetchError]);

    return (
        <>
            <label htmlFor="my_modal_6" className="w-fit flex flex-row items-center cursor-pointer">
                <div key={userData.userAddress?.city}>
                    {userData.userAddress?.city ?
                        <>
                            <div className='flex items-center'>
                                <CiLocationOn className='text-4xl max-[900px]:text-3xl' />
                                <div onClick={() => {
                                        setValue('zipCode', ''),
                                        setUser({})
                                }}>
                                    <p className='text-sm font-medium whitespace-nowrap'>Entregar em</p>
                                    <p className='max-w-56 overflow-hidden text-base font-semibold flex flex-row items-center whitespace-nowrap max-[900px]:text-base max-[900px]:max-w-full max-[750px]:text-sm'>{userData.userAddress.city} {userData.userAddress.uf} - {userData.userAddress.zipCode}</p>
                                </div>
                            </div>
                        </> : <>
                            <div className="flex flex-row items-center">
                                <CiLocationOn className='text-4xl max-[900px]:text-2xl' />
                                <p  onClick={() => {
                                        setValue('zipCode', ''),
                                        setUser({})
                                    }}
                                    className='text-white font-medium text-sm text-left leading-tight whitespace-nowrap max-[900px]:flex max-[900px]:items-center max-[900px]:gap-x-1'>
                                        Incluir minha <br />
                                        <span className='text-lg font-bold max-[900px]:text-sm'>Região</span>
                                </p>
                            </div>
                        </>}
                </div>
            </label>

            <input ref={checkboxInputRef} type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="w-fit max-w-[calc(100%-30px)] box-border rounded-md bg-white h-60 relative flex flex-col items-center justify-center gap-y-5 px-7">
                    <h3 className="text-xl font-semibold text-black">Informe seu cep para proseguir</h3>
                    <form onSubmit={handleSubmit(handleFormSubmit)}
                        className="w-full flex flex-row gap-x-5 items-start max-[620px]:flex-col max-[620px]:gap-y-3"
                    >
                        <div className="relative w-full">
                            <input
                                {...register('zipCode')}
                                className="outline-none bg-transparent w-full h-12 text-base text-gray-800 font-medium border-2 px-3 border-primary placeholder:text-gray-500 rounded-md"
                                type="text"
                                placeholder="Digite seu CEP"
                                maxLength={8}
                            />
                            {errors.zipCode?.message && (
                                <p className="text-error font-medium text-sm absolute -bottom-6 left-0 max-[620px]:static">{errors.zipCode.message}</p>
                            )}
                        </div>
                        <button className="btn outline-none border-none bg-primary text-white w-52 h-12 rounded-md max-[620px]:w-full">Continuar</button>
                    </form>
                    <div className="absolute top-3 right-3">

                        <label htmlFor="my_modal_6" className=""><IoIosClose className='text-4xl text-black cursor-pointer max-[750px]:text-3xl' /></label>
                    </div>
                </div>
            </div>

            {user.isAllowed && <GetLocationData zipCode={user.zipCode} setUserData={setUser} />}
        </>
    );
};