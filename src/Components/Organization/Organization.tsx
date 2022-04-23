import { Route, Routes } from "react-router-dom";
import RequireAuth from "../RequireAuth";
import { LoginOrganization } from "../Login/LoginOrganization";
import { OrganizationFeed } from "./OrganizationFeed";
import { SubmitOrganization } from "../Register/SubmitOrganization";

export const Organization = () => (
    <div>
        <Routes>
            <Route path="feed" element={<OrganizationFeed />} />
        </Routes>
    </div>
);