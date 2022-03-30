import { gql, useQuery } from "@apollo/client"
import { AppBar, Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import { useState } from "react";
import { AdminHeader } from "./AdminHeader";


export const AdminPanel = () => {
    const GET_SUBMISSION_QUERY = gql`
        query GetSubmissions {
            getAllSubmittedOrganizations {
                id
                name
                description
                email
                accepted
            }
        }
    `;

    const [submittedOrganizations, setSubmittedOrganizations] = useState([]);

    const { data, error } = useQuery(GET_SUBMISSION_QUERY, {
        onCompleted: (data: any) => {
            setSubmittedOrganizations(data.getAllSubmittedOrganizations);
        }
    });

    return (
        <Container component="div">
            <AdminHeader />
            <Box sx={{
                mt: 10,
                display: 'grid',
                gridRowGap: '20px',
                gridColumnGap: '20px',
                gridTemplateColumns: 'auto auto auto',
            }}>
                {
                    submittedOrganizations.map((submittedOrg: any, index: number) => {
                        console.log("here" + submittedOrg);
                        return (
                            <Card sx={{ maxWidth: 345, minWidth: 300 }} key={submittedOrg.id}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {submittedOrg.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        {submittedOrg.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {submittedOrg.email}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {submittedOrg.address}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {!submittedOrg.accepted && <Button variant='contained' size="small">Accept</Button>}
                                    <Button variant='outlined' size="small" color="error">Delete</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Box>
        </Container >
    )
}