import { createTheme } from "@mui/material";

const baseTheme = createTheme({
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
        fontFamily: "'Inter', sans-serif",
    },
    shape: {
        borderRadius: 16,
    },
});

const theme = createTheme(baseTheme, {
    typography: {
        h1: {
            fontWeight: 800,
            lineHeight: 1.25,
            fontSize: "4rem",
            [baseTheme.breakpoints.down("lg")]: { fontSize: "3.5rem" },
            [baseTheme.breakpoints.down("md")]: { fontSize: "3rem" },
            [baseTheme.breakpoints.down("sm")]: { fontSize: "2.5rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "2.25rem" },
        },
        h2: {
            fontWeight: 800,
            lineHeight: 1.2,
            fontSize: "3.75rem",
            [baseTheme.breakpoints.down("lg")]: { fontSize: "3.5rem" },
            [baseTheme.breakpoints.down("md")]: { fontSize: "3rem" },
            [baseTheme.breakpoints.down("sm")]: { fontSize: "2.5rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "2rem" },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: "2.25rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "2rem" },
            [baseTheme.breakpoints.down("sm")]: { fontSize: "1.75rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "1.5rem" },
        },
        h4: {
            fontWeight: 700,
            lineHeight: 1.25,
            fontSize: "1.75rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "1.5rem" },
            [baseTheme.breakpoints.down("sm")]: { fontSize: "1.35rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "1.25rem" },
        },
        h5: {
            fontWeight: 600,
            lineHeight: 1.3,
            fontSize: "1.35rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "1.25rem" },
            [baseTheme.breakpoints.down("sm")]: { fontSize: "1.15rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "1.1rem" },
        },
        h6: {
            fontWeight: 600,
            lineHeight: 1.3,
            fontSize: "1.25rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "1.1rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "1rem" },
        },
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: "1.25rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "1.15rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "1.05rem" },
        },
        subtitle2: {
            fontWeight: 500,
            lineHeight: 1.5,
            fontSize: "1.05rem",
            [baseTheme.breakpoints.down("md")]: { fontSize: "1rem" },
            [baseTheme.breakpoints.down("xs")]: { fontSize: "0.95rem" },
        },
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: "1rem",
            [baseTheme.breakpoints.down("xs")]: { fontSize: "0.95rem" },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: "0.875rem",
            [baseTheme.breakpoints.down("xs")]: { fontSize: "0.825rem" },
        },
        button: {
            fontWeight: 600,
            lineHeight: 1.7,
            fontSize: "0.920rem",
            textTransform: "none",
        },
        caption: {
            fontWeight: 400,
            lineHeight: 1.4,
            fontSize: "0.75rem",
        },
    },
});

export default theme;