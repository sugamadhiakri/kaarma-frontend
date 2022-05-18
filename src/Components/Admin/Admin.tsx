import { Route, Routes, useNavigate } from "react-router-dom";
import RequireAuth from "../RequireAuth";
import { AdminPanel } from "./AdminPanel";

export const Admin = () => {

    // const token = localStorage.getItem("token");


    // const navigate = useNavigate();
    // if (token) {
    //     navigate("panel");
    // } else {
    //     navigate("login");
    // }
    return (
        <div>
            <Routes>
                {/* <Route element={<RequireAuth />}> */}
                <Route path="panel" element={<AdminPanel />} />
                {/* </Route> */}
            </Routes>
        </div>
    );
};