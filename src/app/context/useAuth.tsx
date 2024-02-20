import {UserProfile} from "@/app/types/User.ts";
import {Token} from "@/app/types/Token.ts";
import {LoginRequest} from "@/app/types/LoginRequest.ts";
import React, {createContext, ReactNode, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {loginAPI} from "@/app/services/authService.ts";
import {toast} from "react-toastify";
import axios from "axios";

type UserContextType = {
    user?: UserProfile,
    toke: Token,
    login: (req: LoginRequest) => Token
    logout: () => void
    isLoggedIn: () => boolean
}

type Props = { children: ReactNode }

const UserContext = createContext<UserContextType>();

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>();
    const [user, setUser] = useState<UserProfile>();
    const [isReady, setReady] = useState<boolean>(false);


    useEffect(() => {
        const user: string = localStorage.getItem("user");
        const token: string = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        }
        setReady(true);
    }, []);


    const login = async (req: LoginRequest) => {
        await loginAPI(req)
            .then(res => {
                if (res) {
                    localStorage.setItem("token", res.access_token);
                    const user = {
                        email: req.email
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                    setToken(res.access_token);
                    setUser(user);
                    toast.success("Login Successful :)");
                    navigate("/profile");
                }
            })
            .catch((e) => {
                toast.error("Error Occured: " + e);
            })
    }


    const logout = (): void => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken("");
        navigate("/login");
    }

    const isLoggedIn = () => !!user;

    return (
        <UserContext.Provider value={{login, logout, user, token, isLoggedIn}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}


export const useAuth = () => React.useContext(UserContext);


