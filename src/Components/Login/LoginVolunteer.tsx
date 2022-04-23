import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { GOOGLE_CLIENT_ID } from "../../constants";

export const LoginVolunteer = () => {

    // const navigate = useNavigate();

    const GET_ME_QUERY = gql`
        query GetMe {
            me {
                id,
                username,
                role
            }
        }
    
    `;

    const [me, setMe] = useState({});
    const [token, setToken] = useState("");


    const HandleLogin = (googleData: any) => {
        setToken(googleData.token);
        localStorage.setItem("token", token);
    };


    return (
        <div>
            <h1>Volunteer</h1>

            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={(googleData) => HandleLogin(googleData)}
                onFailure={(googleData) => HandleLogin(googleData)}
                cookiePolicy={'single_host_origin'}
            />


        </div>
    );
};