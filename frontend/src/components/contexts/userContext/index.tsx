'use client';

import React, { createContext, ReactNode, useState } from "react";

interface ContextProps {
    userAddress?: AddressProps;
    setUserAddress?: React.Dispatch<React.SetStateAction<AddressProps>>
};

interface AddressProps {
    zipCode?: string | null;
    city?: string | null;
    uf?: string | null;
};

export const UserContext = createContext<ContextProps>({})

export const UserProvider: React.FC<{children: ReactNode }> = ({children}) => {
    const [userAddress, setUserAddress] = useState<AddressProps>({});
    return (
        <UserContext.Provider value={{
            userAddress,
            setUserAddress,
        }}>
            {children}
        </UserContext.Provider>
    )
};