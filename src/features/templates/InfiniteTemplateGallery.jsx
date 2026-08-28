/* eslint-disable no-unused-vars */
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { templates } from './templatesData.js';
import TemplateCard from './TemplateCard.jsx';

import { designTokens } from '../../styles/designTokens.js';

const InfiniteTemplateGallery = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: designTokens.layout.maxWidth,
        py: 12,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 2,
            fontWeight: '600',
            background: designTokens.gradients.heroV2.headlineText,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Choose A Template and Start Building Your Resume
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          fontWeight={700}
          color="text.secondary"
          sx={{
            mb: 3,
            maxWidth: 650,
            mx: 'auto',
            display: 'block',
          }}
        >
          Pick from our collection of professionally designed, ATS-friendly templates crafted to
          help you stand out and land your next role.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 2, md: 4 } }}>
          {templates.slice(0, 8).map((template) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={`${template.id}`}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <TemplateCard image={template.image} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default InfiniteTemplateGallery;
