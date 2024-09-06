'use client';

import React, { useState, createContext, ReactNode } from "react";

interface ContextProps {
    menuController?: MenuProps;
    setMenuController?: React.Dispatch<React.SetStateAction<MenuProps>>
};

interface MenuProps {
    isOverlayActive?: boolean;
    isCategoryMenuActive?: boolean;
    isSettingsMenuActive?: boolean;
}

export const GlobalContext = createContext<ContextProps>({})

export const GlobalProvider: React.FC<{children: ReactNode }> = ({children}) => {
    const [menuController, setMenuController] = useState<MenuProps>({
        isOverlayActive: false,
        isSettingsMenuActive: false,
        isCategoryMenuActive: false
    });
    
    return (
        <GlobalContext.Provider value={{
            menuController, 
            setMenuController
        }}>
            {children}
        </GlobalContext.Provider>
    );
};