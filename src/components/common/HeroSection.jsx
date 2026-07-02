import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';

import { designTokens } from '../../styles/designTokens';
import heroImage from '../../assets/hero_latest.png';
import { ArrowOutwardOutlined } from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: designTokens.layout.maxWidth,
        mt: 3,
        position: 'relative',
      }}
    >
      {/* Background Blobs forming an arc from mid-right to bottom-middle */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '10%',
          width: '500px',
          height: '00px',
          background: 'radial-gradient(circle, rgba(63, 213, 240, 0.73) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '450px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(82, 214, 115, 0.57) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />

      <Box
        sx={(theme) => ({
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.64)',
          backdropFilter: 'blur(50px)',
          border: '1px solid rgba(236, 228, 255, 0.45)',
          borderRadius: `${theme.shape.borderRadius}px`,
          overflow: 'hidden',
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
          // boxShadow: designTokens.shadows.heroBox,
        })}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, sm: 7, md: 6 }}>
            <Typography
              variant="h2"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                mb: 2,
                fontWeight: 600,
              })}
            >
              Create{' '}
              <Box
                component="span"
                sx={{
                  background: designTokens.gradients.heroV2.headlineText,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Professional Resumes
              </Box>{' '}
              in Minutes
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontWeight: 400,
              }}
            >
              Build ATS-friendly resumes using modern templates, real-time preview, and instant PDF
              downloads.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={NavLink}
                to="/templates"
                endIcon={<ArrowOutwardOutlined />}
                sx={{
                  flexGrow: { xs: 1, sm: 0 },
                  fontWeight: 700,
                  lineHeight: 1.8,
                  py: { xs: 1 },
                  background: designTokens.gradients.heroV2.ctaPrimary,
                  color: '#fff',
                  transition: 'all 0.25s ease-in-out',

                  // Hide the icon at rest
                  '& .MuiButton-endIcon': {
                    opacity: 0,
                    maxWidth: 0,
                    overflow: 'hidden',
                    transition: 'opacity 0.2s ease, max-width 0.25s ease',
                    ml: 0,
                  },

                  '&:hover': {
                    background: designTokens.gradients.heroV2.ctaPrimaryHover,
                    transform: 'translateY(-2px)',

                    // Reveal the icon on hover
                    '& .MuiButton-endIcon': {
                      opacity: 1,
                      maxWidth: '24px',
                      ml: 0.75,
                    },
                  },
                }}
              >
                Browse Templates
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 5, md: 6 }} sx={{ display: { xs: 'block' } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Hero"
                sx={{
                  width: '100%',
                  maxWidth: { sm: '100%', md: '90%', lg: '100%' },
                  height: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'scale(1.02) translateY(-4px)',
                  },
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
