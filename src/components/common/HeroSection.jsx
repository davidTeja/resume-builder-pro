import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

import { designTokens } from "../../styles/designTokens";

import heroImage from "../../assets/hero3.png";
// import heroImage from "../../assets/hero.png";

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
        sx={{
          background: designTokens.gradients.hero,
          borderRadius: "32px",
          overflow: "hidden",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 2,
              }}
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
                sx={{
                  bgcolor: "white",
                  color: "primary.main",

                  "&:hover": {
                    bgcolor: "#f1f5f9",
                  },
                }}
              >
                Browse Templates
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Hero"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
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
