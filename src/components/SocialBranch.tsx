import React from 'react';
import { Achievement } from '../types/types';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const socialAchievements: Achievement[] = [
  // Community Engagement
  {
    id: 'first_league',
    title: 'League Rookie',
    description: 'Participate in your first league night',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'tournament_debut',
    title: 'Tournament Debut',
    description: 'Play in your first tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'club_member',
    title: 'Club Member',
    description: 'Join your local disc golf club',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_volunteer',
    title: 'Course Volunteer',
    description: 'Help maintain or improve a local course',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'pdga_member',
    title: 'PDGA Member',
    description: 'Purchase a PDGA membership and receive your player number',
    isUnlocked: false,
    patchAvailable: true
  },

  // Social Connections
  {
    id: 'first_round',
    title: 'First Group Round',
    description: 'Play a round with 3 or more people',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'mentor',
    title: 'Mentor',
    description: 'Teach someone how to play disc golf',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'social_butterfly',
    title: 'Social Butterfly',
    description: 'Play with 10 different people',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_guide',
    title: 'Course Guide',
    description: 'Show a new player around your local course',
    isUnlocked: false,
    patchAvailable: true
  },

  // Competition
  {
    id: 'first_win',
    title: 'First Victory',
    description: 'Win your first tournament or league night',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'division_champion',
    title: 'Division Champion',
    description: 'Win your division in a tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'team_player',
    title: 'Team Player',
    description: 'Participate in a doubles tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'ace_race',
    title: 'Ace Race Veteran',
    description: 'Participate in an ace race event',
    isUnlocked: false,
    patchAvailable: true
  },

  // Social Media
  {
    id: 'social_media',
    title: 'Social Media Star',
    description: 'Share your disc golf journey on social media',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_review',
    title: 'Course Critic',
    description: 'Review a course on UDisc or similar platform',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_community',
    title: 'Disc Community',
    description: 'Join an online disc golf community',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'content_creator',
    title: 'Content Creator',
    description: 'Create disc golf content for others',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'pro_tour_fan',
    title: 'Pro Tour Fan',
    description: 'Start watching day-later content of the pro tour on Jomez Pro or other channels',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'live_coverage_fan',
    title: 'Live Coverage Fan',
    description: 'Purchase a DGN subscription to watch live pro tour coverage',
    isUnlocked: false,
    patchAvailable: true
  },

  // Fun Social Achievements
  {
    id: 'night_round',
    title: 'Night Owl',
    description: 'Play a round after dark with glow discs',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'road_trip',
    title: 'Road Trip',
    description: 'Play a course more than 50 miles from home',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_tourist',
    title: 'Course Tourist',
    description: 'Play 3 different courses in one day',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'disc_golf_party',
    title: 'Disc Golf Party',
    description: 'Host a disc golf gathering with friends',
    isUnlocked: false,
    patchAvailable: true
  },

  // Course Explorer
  {
    id: 'course_explorer_5',
    title: 'Local Legend',
    description: 'Play at 5 unique courses',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_explorer_10',
    title: 'Regional Explorer',
    description: 'Play at 10 unique courses',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_explorer_25',
    title: 'State Champion',
    description: 'Play at 25 unique courses',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_explorer_50',
    title: 'Multi-State Master',
    description: 'Play at 50 unique courses',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'course_explorer_100',
    title: 'Disc Golf Nomad',
    description: 'Play at 100+ unique courses',
    isUnlocked: false,
    patchAvailable: true
  },

  // Leadership
  {
    id: 'first_tournament_director',
    title: 'First Tournament Director',
    description: 'Direct a tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_league_organizer',
    title: 'First League Organizer',
    description: 'Organize a league',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_clinic_instructor',
    title: 'First Clinic Instructor',
    description: 'Instruct at a clinic',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_course_designer',
    title: 'First Course Designer',
    description: 'Help design a disc golf course',
    isUnlocked: false,
    patchAvailable: true
  },

  // Professional Social
  {
    id: 'first_pro_meeting',
    title: 'First Pro Meeting',
    description: 'Meet a professional disc golfer',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_pro_clinic',
    title: 'First Pro Clinic',
    description: 'Attend a pro clinic',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_pro_tournament',
    title: 'First Pro Tournament',
    description: 'Play in a professional tournament',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_pro_sponsorship',
    title: 'First Pro Sponsorship',
    description: 'Receive a sponsorship',
    isUnlocked: false,
    patchAvailable: true
  },
  {
    id: 'first_pro_media',
    title: 'First Pro Media',
    description: 'Appear in disc golf media',
    isUnlocked: false,
    patchAvailable: true
  }
];

const SocialBranch: React.FC = () => {
  return (
    <Card className="w-full bg-green-600 text-white">
      <CardHeader>
        <CardTitle>Social Branch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Community Engagement Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Community Engagement</h3>
          {socialAchievements.slice(0, 5).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Social Connections Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Social Connections</h3>
          {socialAchievements.slice(5, 9).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Competition Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Competition</h3>
          {socialAchievements.slice(9, 13).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Social Media</h3>
          {socialAchievements.slice(13, 17).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Fun Social Achievements Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Fun Social Achievements</h3>
          {socialAchievements.slice(17, 20).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Course Explorer Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Course Explorer</h3>
          {socialAchievements.slice(20, 25).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Leadership Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Leadership</h3>
          {socialAchievements.slice(25, 29).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="bg-white/20" />

        {/* Professional Social Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white/90">Professional Social</h3>
          {socialAchievements.slice(29).map((achievement) => (
            <Card key={achievement.id} className="bg-zinc-900/50 border-white/20">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                </div>
                <Badge variant={achievement.isUnlocked ? "default" : "secondary"}>
                  {achievement.isUnlocked ? "Unlocked" : "Locked"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialBranch;
