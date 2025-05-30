import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SkillBranch from './SkillBranch';
import SocialBranch from './SocialBranch';
import CollectionBranch from './CollectionBranch';

const SkillTree: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        minHeight: '100vh',
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Disc Golf Skill Tree
        </Typography>
        
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          gap: 4
        }}>
          <Box sx={{ width: '30%', minWidth: 0, flex: 1, position: 'relative', zIndex: 3 }}>
            <SkillBranch />
          </Box>
          <Box sx={{ width: '30%', minWidth: 0, flex: 1, position: 'relative', zIndex: 2 }}>
            <SocialBranch />
          </Box>
          <Box sx={{ width: '30%', minWidth: 0, flex: 1, position: 'relative', zIndex: 1 }}>
            <CollectionBranch />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SkillTree;
