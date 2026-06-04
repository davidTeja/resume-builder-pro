import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: "#10B981",
            main: "#059669",
            dark: "#047857",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: "#14B8A6",
            main: "#0F766E",
            dark: "#0E4B4B",
            contrastText: "#FFFFFF",
        },
        background: {
              default: "#F8F9FA",
              paper: "#FFFFFF",
        },
        text: {
            primary: "#212529",
            secondary: "#6C757D",
        },
        divider: "#DEE2E6",

        error: {
            main: "#DC2626",

        },
        warning: {
            main: "#F59E0B",
        },
        info: {
            main: "#3B82F6",

        },
        success: {
            main: "#16A34A"

        }
    },
    typography: {

    },
    spacing: {

    },
    breakpoints: {

    },
    shape: {

    };
});

export default theme;