import { Card, CardMedia } from '@mui/material';
import { designTokens } from '../../styles/designTokens.js';

const TemplateCard = ({ image }) => {
  return (
    <Card
      sx={{
        minWidth: 280,
        width: 280,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: designTokens.shadows.heroBox,
        },
      }}
    >
      <CardMedia component="img" image={image} alt="template" />
    </Card>
  );
};

export default TemplateCard;
