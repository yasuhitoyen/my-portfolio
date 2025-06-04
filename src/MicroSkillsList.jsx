import React from 'react';
import MicroSkills from './MicroSkills';

const MicroSkillsList = ({listskills}) => {
  return (
    <div className="flex flex-row items-center justify-start -space-x-4">
		{listskills?.map((type, index) => {
		return <MicroSkills key={index} skill={type} />;
		})}
    </div>
  );
};

export default MicroSkillsList;
