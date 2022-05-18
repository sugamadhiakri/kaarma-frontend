import { gql, useMutation } from "@apollo/client";
import { AttachFile, CameraAlt } from "@mui/icons-material";
import { Box, Button, Container, CssBaseline, Divider, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    outerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

            <Box p={5} >
                <Typography variant="h1" color="primary">KAARMA</Typography>
            </Box>

            <Box className={classes.innerContainer}>

                <Box flex={5} sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: "50%",
                        }}
                        alt="The house from the offer."
                        src={require("../../static/organizationVector.svg").default}
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
                <Box flex={4} sx={{
                    display: "flex",
                    justifyContent: "center"
                }} display="flex" gap={2}>

                    <Box width="50%">
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
                            error
                            helperText="Enter Valid Email"
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
                        <Box display="flex" gap={2}>
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 3, mb: 3 }}
                                onClick={() => submit()}
                                endIcon={<CameraAlt />}
                            >Upload Logo</Button>

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

        </Box>
    );
};