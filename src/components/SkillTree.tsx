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
          gap: 4,
          width: '100%',
          justifyContent: 'space-between'
        }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <SkillBranch />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <SocialBranch />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <CollectionBranch />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SkillTree;
