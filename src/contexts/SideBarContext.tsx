import { createContext, ReactNode, useState } from "react";

export interface SideBarContextData {
    activedIndex: number,
    activeIndex: (number) => void
}

export const SidebarContext = createContext({} as SideBarContextData);

interface SideBarContextProviderProps {
    children: ReactNode
}

export function SideBarContextProvider({
    children
}: SideBarContextProviderProps) {

    const [activedIndex, setActivedIndex] = useState(0);

    function activeIndex(index: number) {
        setActivedIndex(index);
    }

    return (
        <SidebarContext.Provider value={{
            activedIndex,
            activeIndex
        }}>
            {children}
        </SidebarContext.Provider>
    );
}