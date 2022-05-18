import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../constants';

const useStyle = makeStyles({
    outerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2fdff"
    },

    innerContainer: {
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    styeCenter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    }

});

export default function RegisterVolunteer() {

    const classes = useStyle();
    return (
        <Box component="main" className={classes.outerContainer}>

            <Box p={5} mb={5}>
                <Typography variant="h1" color="primary">KAARMA</Typography>
            </Box>
            <Box className={classes.innerContainer}>
                <Box flex={5} className={classes.styeCenter}>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: "60%",
                        }}
                        alt="The house from the offer."
                        src={require("../../static/volunteerVector.svg").default}
                    />
                    <Box sx={{
                        width: "60%"
                    }}>
                        <Box flex={1}>
                            <Typography
                                gutterBottom
                                variant="h3"
                                component="div"
                                p={1}
                                color="primary"

                            >
                                Login as Volunteer
                            </Typography>
                        </Box>
                        <Box flex={4}>
                            <Typography variant="h6">
                                Be one of our volunteers and unleash your social urge to help people.
                            </Typography>

                        </Box>
                    </Box>
                </Box>
                <Divider orientation="vertical" />
                <Box flex={3} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login with Google"
                        onSuccess={(googleData) => HandleLogin(googleData)}
                        // onFailure={(googleData) => HandleLogin(googleData)}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>

            </Box>

        </Box>
    );
}
function HandleLogin(googleData: import("react-google-login").GoogleLoginResponse | import("react-google-login").GoogleLoginResponseOffline): void {
    throw new Error('Function not implemented.');
}

