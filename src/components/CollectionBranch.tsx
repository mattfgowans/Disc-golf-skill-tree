import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';
import { Achievement } from '../types/types';

const collectionAchievements: Achievement[] = [
  // Basic Equipment
  {
    id: 'first_disc',
    title: 'First Disc',
    description: 'Purchase your first disc',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_bag',
    title: 'First Bag',
    description: 'Get your first disc golf bag',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_putter',
    title: 'First Putter',
    description: 'Add your first putter to your collection',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_midrange',
    title: 'First Midrange',
    description: 'Add your first midrange disc',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_driver',
    title: 'First Driver',
    description: 'Add your first driver disc',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_marker',
    title: 'First Marker',
    description: 'Get your first mini marker',
    isUnlocked: false,
    patchAvailable: true
  },

  // Bag Progression
  {
    id: 'bag_upgrade',
    title: 'Bag Upgrade',
    description: 'Upgrade to a larger disc golf bag',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'cart_owner',
    title: 'Cart Owner',
    description: 'Purchase a disc golf cart',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'backpack_bag',
    title: 'Backpack Bag',
    description: 'Upgrade to a backpack-style bag',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'premium_bag',
    title: 'Premium Bag',
    description: 'Purchase a premium disc golf bag',
    isUnlocked: false,
    patchAvailable: true
  },

  // Disc Collection
  {
    id: 'disc_collector',
    title: 'Disc Collector',
    description: 'Own 10 different discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_hoarder',
    title: 'Disc Hoarder',
    description: 'Own 25 different discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_archivist',
    title: 'Disc Archivist',
    description: 'Own 50 different discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_curator',
    title: 'Disc Curator',
    description: 'Own 100 different discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'brand_loyalist',
    title: 'Brand Loyalist',
    description: 'Own discs from 3 different manufacturers',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'plastic_explorer',
    title: 'Plastic Explorer',
    description: 'Try discs in 3 different plastic types',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'weight_variety',
    title: 'Weight Variety',
    description: 'Own discs ranging from 150g to 175g',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_limited_edition',
    title: 'First Limited Edition',
    description: 'Purchase a limited edition disc',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_tour_series',
    title: 'First Tour Series',
    description: 'Purchase a tour series disc',
    isUnlocked: false,
    patchAvailable: true
  },

  // Customization
  {
    id: 'first_dyed_disc',
    title: 'First Dyed Disc',
    description: 'Get your first dyed disc',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'dye_artist',
    title: 'Dye Artist',
    description: 'Own 5 different dyed discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'bag_artist',
    title: 'Bag Artist',
    description: 'Color coordinate your entire bag',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'custom_stamp',
    title: 'Custom Stamp',
    description: 'Get a disc with a custom stamp',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_tourney_disc',
    title: 'First Tourney Disc',
    description: 'Get a disc from a tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_signature_disc',
    title: 'First Signature Disc',
    description: 'Get a disc signed by a pro',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_custom_disc',
    title: 'First Custom Disc',
    description: 'Design your own custom disc',
    isUnlocked: false,
    patchAvailable: true
  },

  // Accessories
  {
    id: 'first_mini',
    title: 'First Mini',
    description: 'Get your first mini marker',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_towel',
    title: 'First Towel',
    description: 'Get your first disc golf towel',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_retriever',
    title: 'First Retriever',
    description: 'Get your first disc retriever',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_whale_sac',
    title: 'First Whale Sac',
    description: 'Get your first whale sac',
    isUnlocked: false,
    patchAvailable: true
  },

  // Fun Collection Achievements
  {
    id: 'constitution_test',
    title: 'Constitution Test',
    description: 'Complete a round while drinking a large beer',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_graveyard',
    title: 'Disc Graveyard',
    description: 'Have 5 discs that you never use',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'noodle_arm_dreamer',
    title: 'Noodle Arm Dreamer',
    description: "Buy a disc that's way too fast for your arm speed",
    isUnlocked: false,
    patchAvailable: true
  }
];

const CollectionBranch: React.FC = () => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        width: '100%',
        backgroundColor: '#ED6C02',
        color: 'white'
      }}
    >
      <Typography variant="h5" gutterBottom>
        Collection Branch
      </Typography>
      <List>
        {/* Basic Equipment Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Basic Equipment
        </Typography>
        {collectionAchievements.slice(0, 6).map((achievement) => (
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

        {/* Bag Progression Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Bag Progression
        </Typography>
        {collectionAchievements.slice(6, 10).map((achievement) => (
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

        {/* Disc Collection Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Disc Collection
        </Typography>
        {collectionAchievements.slice(10, 19).map((achievement) => (
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

        {/* Customization Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Customization
        </Typography>
        {collectionAchievements.slice(19, 26).map((achievement) => (
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

        {/* Accessories Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Accessories
        </Typography>
        {collectionAchievements.slice(26, 30).map((achievement) => (
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

        {/* Fun Collection Achievements Section */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1, color: 'rgba(255,255,255,0.9)' }}>
          Fun Collection Achievements
        </Typography>
        {collectionAchievements.slice(30).map((achievement) => (
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

export default CollectionBranch;
