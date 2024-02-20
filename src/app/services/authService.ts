import {LoginRequest} from "@/app/types/LoginRequest.ts";
import axios, {AxiosResponse} from "axios";
import {Token} from "@/app/types/Token.ts";
import {handleError} from "@/app/helpers/ErrorHandler.ts";

const url = "https://api.escuelajs.co/api/v1/auth/login";

export const loginAPI = async (req:LoginRequest):Promise<Token | null>  => {
    console.log(req)
    try{
        const response:AxiosResponse<Token> = await axios.post<Token>(url, {
            email: req.email,
            password: req.password
        });

        console.log(response.data +"ppo")
        return response.data as Token
    }catch (error){
        console.log("okook")
        return handleError(error)
    }
}