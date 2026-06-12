import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import { designTokens } from "../../styles/designTokens";
import heroImage from "../../assets/hero3.png";
import { ArrowOutwardOutlined } from "@mui/icons-material";


const HeroSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: designTokens.layout.maxWidth,
        mt: 4,
      }}
    >
      <Box
        sx={(theme) => ({
          background: designTokens.gradients.hero,
          borderRadius: `${theme.shape.borderRadius * 2}px`,
          overflow: "hidden",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
          boxShadow: designTokens.shadows.heroBox,
          zIndex: 1000,
        })}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, sm: 7, md: 6 }}>
            <Typography
              variant="h2"
              sx={(theme) => ({
                color: theme.palette.background.paper,
                mb: 2,
              })}
            >
              Create Professional Resumes in Minutes
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                fontWeight: 400,
              }}
            >
              Build ATS-friendly resumes using modern templates, real-time
              preview, and instant PDF downloads.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={NavLink}
                to="/templates"
                endIcon={<ArrowOutwardOutlined />}
                sx={(theme) => ({
                  flexGrow: { xs: 1, sm: 0 },
                  fontWeight: 700,
                  lineHeight: 1.8,
                  py: { xs: 1 },
                  bgcolor: theme.palette.background.default,
                  color: theme.palette.primary.main,
                  transition: "all 0.25s ease-in-out",

                  // Hide the icon at rest
                  "& .MuiButton-endIcon": {
                    opacity: 0,
                    maxWidth: 0,
                    overflow: "hidden",
                    transition: "opacity 0.2s ease, max-width 0.25s ease",
                    ml: 0,
                  },

                  "&:hover": {
                    background: theme.palette.secondary.light,
                    color: theme.palette.background.paper,
                    transform: "translateY(-2px)",

                    // Reveal the icon on hover
                    "& .MuiButton-endIcon": {
                      opacity: 1,
                      maxWidth: "24px",
                      ml: 0.75,
                    },
                  },
                })}
              >
                Browse Templates
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 5, md: 6 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Hero"
                sx={{
                  width: { sm: "130%", md: "120%" },
                  height: "auto",
                  objectFit: "contain",
                  ml: { sm: 0, md: -4 },
                  mr: { sm: -1 },
                  // transition: "all 0.3s ease-in-out",
                  // "&:hover": {
                  //   transform: "translateY(-12px)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    transform: "scale(1.02) translateY(-4px)",
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};



export default HeroSection;
