import React from 'react';
import SkillBranch from './SkillBranch';
import SocialBranch from './SocialBranch';
import CollectionBranch from './CollectionBranch';

const SkillTree: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="min-h-screen flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">
          Disc Golf Skill Tree
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="w-full">
            <SkillBranch />
          </div>
          <div className="w-full">
            <SocialBranch />
          </div>
          <div className="w-full">
            <CollectionBranch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
