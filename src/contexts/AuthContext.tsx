import { createContext, ReactNode, useContext } from "react";



const AuthContext = createContext(null);

interface AuthContextProviderProps {
    children: ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children
}) => {

    function isLogged(){
        const token = localStorage.getItem('token')
        if(!token)return false
    } 

  return (
    <AuthContext.Provider value={null}>
        {children}
    </AuthContext.Provider>);
}

export default AuthContextProvider;