import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';
import { Achievement } from '../types/types';

const skillAchievements: Achievement[] = [
  // Basic Skills
  {
    id: 'first_throw',
    title: 'First Throw',
    description: 'Make your first throw with proper form',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_par',
    title: 'First Par',
    description: 'Card your first par on a hole',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_birdie',
    title: 'First Birdie',
    description: 'Card your first birdie',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'complete_round',
    title: 'Complete Round',
    description: 'Complete your first full round of disc golf',
    isUnlocked: false,
    patchAvailable: true
  },

  // Putting Mastery
  {
    id: 'circle_1',
    title: 'Circle 1 Mastery',
    description: 'Make 10 putts in a row from Circle 1 (inside 10 meters)',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'circle_2',
    title: 'Circle 2 Warrior',
    description: 'Make 5 putts from Circle 2 (10-20 meters)',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'putting_streak',
    title: 'Putting Streak',
    description: 'Make 20 putts in a row during practice',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'long_putt',
    title: 'Long Range Sniper',
    description: 'Make a putt from beyond 20 meters',
    isUnlocked: false,
    patchAvailable: true
  },

  // Approach Game
  {
    id: 'approach_ace',
    title: 'Approach Ace',
    description: 'Hit an ace on a hole under 200 feet',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'approach_master',
    title: 'Approach Master',
    description: 'Land 3 approach shots within 10 feet of the basket',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'scramble_save',
    title: 'Scramble Save',
    description: 'Save par from a difficult position off the fairway',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'touch_master',
    title: 'Touch Master',
    description: 'Execute a perfect touch shot under 100 feet',
    isUnlocked: false,
    patchAvailable: true
  },

  // Driving Skills
  {
    id: 'straight_shooter',
    title: 'Straight Shooter',
    description: 'Throw a drive that lands within 10 feet of the center line',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'hyzer_master',
    title: 'Hyzer Master',
    description: 'Execute a perfect hyzer shot that lands exactly where intended',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'anhyzer_artist',
    title: 'Anhyzer Artist',
    description: 'Execute a perfect anhyzer shot that lands exactly where intended',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'power_drive',
    title: 'Power Drive',
    description: 'Drive over 350 feet with accuracy',
    isUnlocked: false,
    patchAvailable: true
  },

  // Advanced Techniques
  {
    id: 'first_roller',
    title: 'First Roller',
    description: 'Successfully execute your first roller shot',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_thumber',
    title: 'First Thumber',
    description: 'Successfully execute your first thumber shot',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_forehand',
    title: 'First Forehand',
    description: 'Successfully execute your first forehand drive',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_tomahawk',
    title: 'First Tomahawk',
    description: 'Successfully execute your first tomahawk shot',
    isUnlocked: false,
    patchAvailable: true
  },

  // Distance Milestones
  {
    id: 'distance_200',
    title: '200 Club',
    description: 'Throw a disc over 200 feet',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'distance_300',
    title: '300 Club',
    description: 'Throw a disc over 300 feet',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'distance_400',
    title: '400 Club',
    description: 'Throw a disc over 400 feet',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'distance_500',
    title: '500 Club',
    description: 'Throw a disc over 500 feet',
    isUnlocked: false,
    patchAvailable: true
  },

  // Fun Skill Achievements
  {
    id: 'tree_love',
    title: 'Tree Love',
    description: 'Hit the first available tree on three consecutive holes',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'water_skip',
    title: 'Skip Master',
    description: 'Successfully skip a disc across water',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'blind_ace',
    title: 'Blind Ace',
    description: 'Get an ace on a blind hole',
    isUnlocked: false,
    patchAvailable: true
  }
];

const SkillBranch: React.FC = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        width: '100%',
        backgroundColor: '#2196F3', // Blue theme
        color: 'white'
      }}
    >
      <Typography variant="h5" gutterBottom>
        Skill Branch
      </Typography>
      <List>
        {/* Basic Skills Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Basic Skills
        </Typography>
        {skillAchievements.slice(0, 4).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Putting Mastery Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Putting Mastery
        </Typography>
        {skillAchievements.slice(4, 8).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Approach Game Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Approach Game
        </Typography>
        {skillAchievements.slice(8, 12).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Driving Skills Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Driving Skills
        </Typography>
        {skillAchievements.slice(12, 16).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Advanced Techniques Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Advanced Techniques
        </Typography>
        {skillAchievements.slice(16, 20).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Distance Milestones Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Distance Milestones
        </Typography>
        {skillAchievements.slice(20, 24).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Fun Skill Achievements Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Fun Skill Achievements
        </Typography>
        {skillAchievements.slice(24).map((achievement) => (
          <ListItem 
            key={achievement.id}
            sx={{
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 1,
              mb: 1,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
          >
            <ListItemText
              primary={achievement.title}
              secondary={
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  {achievement.description}
                </Typography>
              }
            />
            <Chip 
              label={achievement.isUnlocked ? "Unlocked" : "Locked"}
              color={achievement.isUnlocked ? "success" : "default"}
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SkillBranch;
