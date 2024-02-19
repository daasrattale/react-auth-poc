import {Link, Outlet} from "react-router-dom";

export const Layout = () => (
   <>
       <nav>
           <ul className="flex gap-5 my-10 justify-center">
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/login">Login</Link>
               </li>
           </ul>
       </nav>

       <div className="border-2 border-amber-200">
           <Outlet />
       </div>
   </>

);
