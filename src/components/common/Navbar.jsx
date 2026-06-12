import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { designTokens } from "../../styles/designTokens.js";

const navItems = [
  {
    label: "Templates",
    path: "/templates",
  },
  {
    label: "My Resumes",
    path: "/my-resumes",
  },
  {
    label: "About",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        maxWidth: designTokens.layout.maxWidth,
        mt: 2,
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          backgroundColor: theme.palette.background.paper,

          px: 4,
          py: 2,

          borderRadius: "20px",


          boxShadow: designTokens.shadows.navbar2,
        })}
      >
        {/* Logo */}

        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          sx={(theme) => ({
            textDecoration: "none",
            color: theme.palette.text.primary,
            fontWeight: 700,
          })}
        >
          Resume Builder Pro
        </Typography>

        {/* Navigation */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            mx: 0.5,
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={(theme) => ({
                textDecoration: "none",
                color: theme.palette.text.secondary,
                fontWeight: 500,
                display: { xs: "none", md: "block" },

                "&.active": {
                  color: theme.palette.primary.main,
                },
              })}
            >
              {item.label}
            </Typography>
          ))}

          <Button
            variant="contained"
            component={NavLink}
            to="/templates"
            sx={{
              px: 2.5,
              py: 1,
              textTransform: "none",
              "&:hover": {
                transition: "all 0.2s ease-in-out",
                transform: "translateY(-2px)",
              }
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;

