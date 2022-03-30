import { Box, Button, Container } from "@mui/material"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <Container component="div">
            <Box>
                <Link to="#"><Button>Volunteer</Button></Link>
                <Link to="/organization"><Button>Organization</Button></Link>
                <Link to="/admin"><Button>Admin</Button></Link>
            </Box>
        </Container>
    )
}