import {Link, Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth} from "@/app/context/useAuth.tsx";


export const Layout = () => {
    const {isLoggedIn} = useAuth();

    return (<>
            <nav>
                <ul className="flex gap-5 my-10 justify-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={isLoggedIn() ? "/profile" : "/login"}>{isLoggedIn() ? "Profile" : "Login"}</Link>
                    </li>
                </ul>
            </nav>

            <div className="border-2 border-gray-500 rounded">
                <Outlet/>
                <ToastContainer/>
            </div>
        </>
    );

};
