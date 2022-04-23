import { gql, useMutation } from "@apollo/client";
import { Box, Button, Container, CssBaseline, Divider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    outerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh"
    },

    innerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }

});

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
`;
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
            alert("Submission Sucessful");
            console.log(data);
            navigate('/home');
        },
        onError: (error) => {
            alert("Error while submitting form, see log.");
            console.log(error);
        }
    });

    const submitData = () => {
        console.log(formState);
    };

    const classes = useStyle();
    return (
        <Box component="main" className={classes.outerContainer}>



            <Box className={classes.innerContainer}>

                <Box flex={1} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
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
                                Register Organization
                            </Typography>
                        </Box>
                        <Box flex={4}>
                            <Typography variant="h6">
                                Register your organization to assist your volunteers in connecting with those in need.
                            </Typography>

                        </Box>
                    </Box>
                </Box>


                <Divider orientation="vertical" />
                <Box flex={1} sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Box width="65%">
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
                                });
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


            </Box>

        </Box>
    );
};