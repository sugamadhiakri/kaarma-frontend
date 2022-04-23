import { Style } from "@mui/icons-material";
import { Box, Button, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { theme } from "../../theme";



const image = "../../../static/pexels-rodolfo-quirós-2219024.jpg";
const url = `${image}`;


const useStyles = makeStyles({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/HB0HbDd/pexels-pixabay-45842.jpg')`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    },

    centerdiv: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
});

export const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>

            <Box >
                <Typography m={3} variant="h1">KAARMA</Typography>
                <Typography m={5} variant="h5">Be the one you needed when you were helpless.</Typography>
            </Box>


            <Box flex={1} sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Box flex={1} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant="h5">I want to Help</Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
                        <Button variant="contained" color='secondary'>Volunteer</Button>
                    </Box>
                </Box>

                <Box flex={1} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant="h5" >I need volunteers</Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
                        <Button variant="contained">Login as Organization</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

