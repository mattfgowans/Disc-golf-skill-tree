import React from 'react';
import { Achievement } from '../types/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Collection Branch</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Basic Equipment Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Equipment</h3>
          {collectionAchievements.slice(0, 6).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Bag Progression Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Bag Progression</h3>
          {collectionAchievements.slice(6, 10).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Disc Collection Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Disc Collection</h3>
          {collectionAchievements.slice(10, 19).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Customization Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customization</h3>
          {collectionAchievements.slice(19, 26).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Accessories Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accessories</h3>
          {collectionAchievements.slice(26, 30).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        {/* Fun Collection Achievements Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Fun Collection Achievements</h3>
          {collectionAchievements.slice(30, 33).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
              <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                {achievement.isUnlocked ? "Unlocked" : "Locked"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CollectionBranch;
