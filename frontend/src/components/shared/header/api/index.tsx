import { useState, useEffect, Dispatch, SetStateAction, useContext } from "react"

import { UserContext } from "@/components/contexts/userContext";

import { UserProps } from "@/components/shared/header/userLocation/index";

type Props = {
    setUserData?: Dispatch<SetStateAction<UserProps>>
    zipCode?: string;
}

export default function GetLocationData(props: Props) {
    const user = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, [props.zipCode]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${props.zipCode}/json`);
            const data = await response.json();
            if (!data.erro) {
                user.setUserAddress &&
                    user.setUserAddress(() => ({
                        zipCode: data.cep ?? null,
                        city: data.localidade ?? null,
                        uf: data.uf ?? null
                    }));

                props.setUserData &&
                    props.setUserData(prev => ({
                        ...prev,
                        fetchError: false,
                        isAddressAvailable: true
                    }));

            } else {

                props.setUserData &&
                    props.setUserData(prev => ({
                        ...prev,
                        fetchError: true,
                        errorMessage: 'CEP não encontrado'
                    }))
            }
        } catch (error) {
            console.error(error);
            props.setUserData &&
                props.setUserData(prev => ({
                    ...prev,
                    fetchError: true,
                    errorMessage: 'Erro na busca'
                }))
        }
    };

    return (
        null
    )
};