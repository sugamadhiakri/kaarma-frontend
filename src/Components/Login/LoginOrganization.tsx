import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import React from "react";



export const LoginOrganization = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Form submitted");
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography>Organization Log In</Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />

                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Log In</Button>

                </Box>
            </Box>
        </Container>
    )
}