import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0276aa',

        },
        secondary: {
            main: '#00a152',
        },
        background: {
            default: "#f2fdff"
        }
    },

    shape: {
        borderRadius: "10px"
    },

    typography: {
        fontFamily: [
            "Roboto",
            "PT Sans"
        ].join(",")
    }
});