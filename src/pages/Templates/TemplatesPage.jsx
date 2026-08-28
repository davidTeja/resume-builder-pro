import { Container, Grid, Typography, Card, CardMedia, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { templates } from '../../features/templates/templatesData.js';

const TemplatesPage = () => {
  return (
    <Container sx={{ py: 8, minHeight: '80vh' }} maxWidth="lg">
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={800}
          gutterBottom
          sx={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}
        >
          Choose Your Resume Template
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}
        >
          Select from our collection of professionally designed, ATS-optimized layout templates to get started building your resume.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={template.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                },
              }}
            >
              <Box sx={{ position: 'relative', pt: '141.4%', width: '100%', overflow: 'hidden', bgcolor: 'grey.50' }}>
                <CardMedia
                  component="img"
                  image={template.image}
                  alt={template.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </Box>
              <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="h2" fontWeight={700} noWrap sx={{ mb: 2 }}>
                  {template.name}
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/build-resume?template=${template.id}`}
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
                    }
                  }}
                >
                  Use Template
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TemplatesPage;