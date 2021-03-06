import { Route, Routes } from "react-router-dom";
import { LoginOrganization } from "./LoginOrganization";
import { SubmitOrganization } from "./SubmitOrganization";

export const Organization = () => (
    <div>
        <Routes>
            <Route path="submit" element={<SubmitOrganization />}></Route>
            <Route path="login" element={<LoginOrganization />}></Route>
        </Routes>
    </div>
);