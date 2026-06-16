import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { designTokens } from "../../styles/designTokens.js";
import { useState } from "react";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          // keep relative so we can absolutely position the logo on small screens
          position: "relative",
          display: "flex",
          alignItems: "center",
          // center content on xs (so the menu icon appears centered), keep space-between on md+
          justifyContent: { xs: "center", md: "space-between" },

          backgroundColor: theme.palette.background.paper,

          px: { xs: 1.5, sm: 3, md: 4 },
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
            // take the logo out of normal flow on small screens so the nav (menu) can be centered
            position: { xs: "absolute", md: "static" },
            left: { xs: 12, md: "auto" },
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
            to="/build-resume"
            sx={{
              display: { xs: "none", md: "inline-flex" }, // hide on mobile so the menu icon can be centered
              px: 2.5,
              py: 1,
              textTransform: "none",
              "&:hover": {
                transition: "all 0.2s ease-in-out",
                transform: "translateY(-2px)",
              },
            }}
          >
            Get Started
          </Button>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            color="inherit"
            aria-label="menu button"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            slotProps={{
              paper: {
                sx: {
                  width: { xs: "75%", sm: 320 },
                },
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              {navItems.map((item) => (
                <Button
                  variant="text"
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={(theme) => ({
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    color: theme.palette.text.secondary,
                    size: "large",
                    fontWeight: 500,
                    mb: 1,
                  })}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
