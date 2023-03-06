import React, { ReactNode, useState } from "react";
import * as auth from 'auth-provider';
import { User } from "screens/project-list/search-panel";

interface AuthForm {
    username: string;
    password: string;
}

const AuthContext = React.createContext<
    | {
        user: User|null;
        register: (form: AuthForm) => Promise<void>;
        login: (form: AuthForm) => Promise<void>;
        logout: () => Promise<void>;
    }
    | undefined
    >(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    // point free
    const login = async (form: AuthForm) => {
        await auth.login(form).then(setUser);
    }
    const register = async (form: AuthForm) => {
        await auth.register(form).then(setUser);
    }
    const logout = async () => {
        await auth.logout().then(() => setUser(null));
    }

    return (
        <AuthContext.Provider 
            children={children}
            value={{ user, login, register, logout }}
        />
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used in AuthProvider')
    }
    return context;
};
