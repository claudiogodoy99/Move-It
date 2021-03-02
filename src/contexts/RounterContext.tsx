import { createContext, ReactNode, useState } from "react";

export interface RounterContextData {
    activedRoute: string,
    activeRouter: (string) => void
}

export const RounterContext = createContext({} as RounterContextData);

interface RounterContextProviderProps {
    children: ReactNode
}

export function RounterContextProvider({
    children
}: RounterContextProviderProps) {

    const [activedRoute, setAtivedRoute] = useState("/");

    function activeRouter(route: string) {
        setAtivedRoute(route);
    }

    return (
        <RounterContext.Provider value={{
            activedRoute,
            activeRouter
        }}>
            {children}
        </RounterContext.Provider>
    );
}