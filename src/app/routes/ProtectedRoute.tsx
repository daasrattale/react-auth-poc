import {ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "@/app/context/useAuth.tsx";

type ProtectedRouteProps = {
    children: ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {

    const location = useLocation();
    const {isLoggedIn} = useAuth();

    return isLoggedIn() ?
        (<>{children}</>) :
        (<Navigate to="/login" state={{from: location}} replace/>);
};