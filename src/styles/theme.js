import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  palette: {
    primary: {
      light: '#6366F1',
      main: '#4F46E5',
      dark: '#4338CA',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#8B5CF6',
      main: '#7C3AED',
      dark: '#6D28D9',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#092630',
      muted: '#111925a2',
      tertiary: '#64748B',
    },
    divider: '#E2E8F0',

    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    info: {
      main: '#3B82F6',
    },
    success: {
      main: '#10B981',
    },
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
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.02em',
      fontWeight: 800,
      lineHeight: 1.25,
      fontSize: '4rem',
      [baseTheme.breakpoints.down('lg')]: { fontSize: '3.5rem' },
      [baseTheme.breakpoints.down('md')]: { fontSize: '3rem' },
      [baseTheme.breakpoints.down('sm')]: { fontSize: '2.5rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '2.25rem' },
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.02em',
      fontWeight: 800,
      lineHeight: 1.2,
      fontSize: '3.75rem',
      [baseTheme.breakpoints.down('lg')]: { fontSize: '3.5rem' },
      [baseTheme.breakpoints.down('md')]: { fontSize: '3rem' },
      [baseTheme.breakpoints.down('sm')]: { fontSize: '2.5rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '2rem' },
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.02em',
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '2rem' },
      [baseTheme.breakpoints.down('sm')]: { fontSize: '1.75rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '1.5rem' },
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.01em',
      fontWeight: 700,
      lineHeight: 1.25,
      fontSize: '1.75rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '1.5rem' },
      [baseTheme.breakpoints.down('sm')]: { fontSize: '1.35rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '1.25rem' },
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.01em',
      fontWeight: 600,
      lineHeight: 1.3,
      fontSize: '1.35rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '1.25rem' },
      [baseTheme.breakpoints.down('sm')]: { fontSize: '1.15rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '1.1rem' },
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '-0.01em',
      fontWeight: 600,
      lineHeight: 1.3,
      fontSize: '1.25rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '1.1rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '1rem' },
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '1.25rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '1.15rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '1.05rem' },
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 1.5,
      fontSize: '1.05rem',
      [baseTheme.breakpoints.down('md')]: { fontSize: '1rem' },
      [baseTheme.breakpoints.down('xs')]: { fontSize: '0.95rem' },
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '1rem',
      [baseTheme.breakpoints.down('xs')]: { fontSize: '0.95rem' },
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: '0.875rem',
      [baseTheme.breakpoints.down('xs')]: { fontSize: '0.825rem' },
    },
    button: {
      fontWeight: 600,
      lineHeight: 1.7,
      fontSize: '0.920rem',
      textTransform: 'none',
    },
    caption: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontSize: '0.75rem',
    },
  },
});

export default theme;
