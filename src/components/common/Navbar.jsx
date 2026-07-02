import { Box, Button, Container, IconButton, Typography, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { designTokens } from '../../styles/designTokens.js';
import { useState } from 'react';

const navItems = [
  { label: 'Templates', path: '/templates' },
  { label: 'My Resumes', path: '/my-resumes' },
  { label: 'About', path: '/about' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        mt: 1,
        maxWidth: designTokens.layout.maxWidth,
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: `${theme.shape.borderRadius}px`,
          borderBottom: `2px solid ${theme.palette.divider}`,
          backgroundColor: 'rgba(255, 255, 255, 0.87)',
          backdropFilter: 'blur(5px)',
          px: { xs: 2, sm: 3, md: 4 },
          py: 2,
        })}
      >
        {/* Logo - FIXED: variant changed back to a string string */}
        <Typography
          component={NavLink}
          to="/"
          variant="h6" //  Pulls responsive sizes directly from theme.js automatically!
          sx={(theme) => ({
            textDecoration: 'none',
            color: theme.palette.text.primary,
            fontWeight: theme.typography.h6.fontWeight,
            whiteSpace: 'nowrap',
          })}
        >
          Resume Builder Pro
        </Typography>

        {/* Navigation Actions Holder */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2, md: 4 },
          }}
        >
          {/* Desktop Nav Links */}
          {navItems.map((item) => (
            <Typography
              key={item.path}
              component={NavLink}
              to={item.path}
              variant="body1"
              sx={(theme) => ({
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontWeight: 500,
                px: 0.5,
                display: { xs: 'none', md: 'block' },
                '&.active': {
                  color: theme.palette.primary.dark,
                },
                '&:hover': {
                  backgroundColor: designTokens.shadows.linkHoverShadow,
                  borderRadius: '6px',
                },
              })}
            >
              {item.label}
            </Typography>
          ))}

          {/* CTA Button */}
          <Button
            variant="contained"
            component={NavLink}
            to="/build-resume"
            size="medium" // FIXED: Keeping sizes predictable using simple MUI defaults
            sx={{
              px: { xs: 1.5, sm: 2.5 },
              py: 1,
              whiteSpace: 'nowrap',
              background: designTokens.gradients.heroV2.ctaPrimary,
              '&:hover': {
                transition: 'all 0.2s ease-in-out',
                background: designTokens.gradients.heroV2.ctaPrimaryHover,
                transform: 'translateY(-2px)',
              },
            }}
          >
            Get Started
          </Button>

          {/* Burger Menu Icon */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            color="inherit"
            aria-label="menu button"
            sx={{
              display: { md: 'none', xs: 'inline-flex' },
              p: 0.5,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: (theme) => ({
              width: { xs: '75%', sm: 320 },
              p: 3,
              backgroundColor: theme.palette.background.paper,
            }),
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 4 }}>
          {navItems.map((item) => (
            <Button
              variant="text"
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              sx={(theme) => ({
                justifyContent: 'flex-start',
                color: theme.palette.primary.main,
                fontWeight: 400,
                fontSize: theme.typography.subtitle2.fontSize,
                '&.active': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'rgba(5, 150, 105, 0.08)', // Fallback style wrapper
                },
              })}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Navbar;
