import { Box } from '@mui/material';
import TemplateCard from './TemplateCard';

const TemplateRow = ({ templates, animation }) => {
  const duplicated = [...templates, ...templates];

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 1.5,
      }}
    >
      <Box
        className={animation}
        sx={{
          display: 'flex',
          gap: 3,
          width: 'max-content',
        }}
      >
        {duplicated.map((template) => (
          <TemplateCard key={`${template.id}`} image={template.image} />
        ))}
      </Box>
    </Box>
  );
};

export default TemplateRow;
