import { gql, useMutation } from "@apollo/client";
import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SUBMIT_MUTATION = gql`
    mutation SubmitOrg(
        $name: String!
        $description: String!
        $address: String!
        $email: String!
        $phone: String!
    ) {
        submmitOrganization(
            name: $name
            description: $description
            address: $address
            email: $email
            phone: $phone
        ) {
            id
            name
            email
            address
            phone
            description
        }
    }
`
export const SubmitOrganization = () => {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        description: ''
    });

    const [submit, { error }] = useMutation(SUBMIT_MUTATION, {
        variables: {
            name: formState.name,
            email: formState.email,
            address: formState.address,
            phone: formState.phone,
            description: formState.description
        },
        onCompleted: (data) => {
            alert("Submission Sucessful")
            console.log(data);
            navigate('/home')
        },
        onError: (error) => {
            alert("Error while submitting form, see log.");
            console.log(error);
        }
    })

    const submitData = () => {
        console.log(formState);
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
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                >
                    Submit Organization
                </Typography>

                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                name: e.target.value
                            });
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="text"
                        autoComplete="email"
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                email: e.target.value
                            });
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="text"
                        autoComplete="address"
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                address: e.target.value
                            });
                        }}

                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="text"
                        autoComplete="phone"
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                phone: e.target.value
                            });
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        multiline
                        rows={3}
                        onChange={(e) => {
                            setFormState({
                                ...formState,
                                description: e.target.value
                            })
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 3 }}
                        onClick={() => submit()}
                    >Submit</Button>
                </Box>
            </Box>
        </Container >
    )
};