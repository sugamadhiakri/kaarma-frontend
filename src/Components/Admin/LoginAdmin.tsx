import { gql, useMutation } from "@apollo/client";
import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
mutation Login (
    $username:String!,
    $password:String!
    ){
	loginAdmin(
        username: $username, 
        password:$password
    ) 
}
`



export const LoginAdmin = () => {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            username: "admin",
            password: "password"
        },
        onCompleted: ({ login }) => {
            localStorage.setItem("token", login);
            console.log(login);
            navigate('panel');
        }
    });


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography>Admin Log In</Typography>
                <Box sx={{ mt: 1 }} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="text"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                username: e.target.value
                            });
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                password: e.target.value
                            });
                        }}
                    />

                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={() => login()}>Log In</Button>

                </Box>
            </Box>
        </Container >
    )
}