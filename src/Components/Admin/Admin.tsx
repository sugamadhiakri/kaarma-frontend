import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AdminPanel } from "./AdminPanel";
import { LoginAdmin } from "./LoginAdmin";

export const Admin = () => {

    const token = localStorage.getItem("token");

    const navigate = useNavigate();
    // if (token) {
    //     navigate("panel");
    // }
    // console.log('here');
    // navigate("login");

    useEffect(() => {
        if (token) {
            console.log(token);
            navigate("panel");
        } else {
            navigate('login');
        }
    }, []);
    return (
        <div>
            <Routes>
                <Route path="login" element={<LoginAdmin />} />
                <Route path="panel" element={<AdminPanel />} />
            </Routes>
        </div>
    );
};