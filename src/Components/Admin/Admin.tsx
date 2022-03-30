import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminPanel } from "./AdminPanel";
import { LoginAdmin } from "./LoginAdmin";

export const Admin = () => {

    const token = localStorage.getItem("token");


    const navigate = useNavigate();
    if (token) {
        navigate("panel");
    } else {
        navigate("login");
    }
    return (
        <div>
            <Routes>
                <Route path="login" element={<LoginAdmin />} />
                <Route path="panel" element={<AdminPanel />} />
            </Routes>
        </div>
    )
}