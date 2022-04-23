import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth = () => {
    const { auth }: any = useAuth();
    const location = useLocation();
    const paths = location.pathname.split("/");
    const loginPath = "/login-" + paths[1];

    if (auth) {
        console.log("raicha ta auth kina redirect garira" + auth.token);
    }
    return (
        // auth?.token
        //     ? <Outlet />
        //     : <Navigate to={loginPath} state={{ from: location }} replace />
        <Outlet />
    );
};

export default RequireAuth;