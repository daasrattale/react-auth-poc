import './App.css'
import {Home, Layout, Login, NoPage, Profile} from "@/app/components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/app/routes/ProtectedRoute.tsx";
import {UserProvider} from "@/app/context/useAuth.tsx";

function App() {

    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}

export default App
