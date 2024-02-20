import {useAuth} from "@/app/context/useAuth.tsx";
import {Button} from "@/app/components/ui/button.tsx";

export const Profile = () => {

    const {user, logout} = useAuth();

    return (
        <>
            <h1>Profile Page</h1>
            <h2>Email: {user.email}</h2>
            <Button variant="destructive" onClick={logout} className="my-5">
                Log out
            </Button>
        </>
    );
}
