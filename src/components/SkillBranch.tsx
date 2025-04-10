import React from 'react';
import { Achievement } from '../types/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
  {
    id: 'first_bogey',
    title: 'First Bogey',
    description: 'Card your first bogey (a rite of passage!)',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_round_under_par',
    title: 'First Round Under Par',
    description: 'Complete a round under par',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description: 'Card the same score on 3 consecutive holes',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'recovery',
    title: 'Recovery',
    description: 'Save par after a bad drive',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'fairway_finder',
    title: 'Fairway Finder',
    description: 'Land 5 drives in a row on the fairway',
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
  {
    id: 'pressure_putt',
    title: 'Pressure Putt',
    description: 'Make a putt to save par or birdie from Circle 2',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'combo_master',
    title: 'Combo Master',
    description: 'Make a birdie putt after a great drive',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'putting_practice',
    title: 'Putting Practice',
    description: 'Practice putting for 30 minutes straight',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'wind_warrior',
    title: 'Wind Warrior',
    description: 'Make a putt in strong wind conditions',
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
  {
    id: 'shot_shaper',
    title: 'Shot Shaper',
    description: 'Successfully execute all shot shapes (hyzer, flat, anhyzer, roller)',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'forehand_distance',
    title: 'Forehand Distance',
    description: 'Throw 250 feet forehand',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'backhand_distance',
    title: 'Backhand Distance',
    description: 'Throw 350 feet backhand',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'putting_under_pressure',
    title: 'Putting Under Pressure',
    description: 'Make 3 pressure putts in one round',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'scramble_master',
    title: 'Scramble Master',
    description: 'Save par from an out-of-bounds situation',
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
  },

  // Professional Level
  {
    id: 'ace_race',
    title: 'Ace Race',
    description: 'Hit 3 aces in one month',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'tournament_winner',
    title: 'Tournament Winner',
    description: 'Win a local tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'perfect_round',
    title: 'Perfect Round',
    description: 'Complete a round without a single mistake',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_record',
    title: 'Course Record',
    description: 'Set a new course record',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'pro_qualifier',
    title: 'Pro Qualifier',
    description: 'Qualify for a professional tournament',
    isUnlocked: false,
    patchAvailable: true
  }
];

const SkillBranch: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Skill Branch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Skills Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Skills</h3>
          {skillAchievements.slice(0, 9).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

        <Separator />

        {/* Putting Mastery Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Putting Mastery</h3>
          {skillAchievements.slice(9, 17).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

        <Separator />

        {/* Advanced Techniques Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Advanced Techniques</h3>
          {skillAchievements.slice(17, 26).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

        <Separator />

        {/* Distance Milestones Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Distance Milestones</h3>
          {skillAchievements.slice(26, 30).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

        <Separator />

        {/* Fun Skill Achievements Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Fun Skill Achievements</h3>
          {skillAchievements.slice(30, 33).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

        <Separator />

        {/* Professional Level Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Professional Level</h3>
          {skillAchievements.slice(33, 38).map((achievement) => (
            <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
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

export default SkillBranch;
