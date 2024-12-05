import { useState, useEffect } from 'react';

export type SkillType = 'Reading' | 'Writing' | 'Speaking' | 'Listening';

export const useProgress = () => {
  const [progress, setProgress] = useState<Record<SkillType, number>>(() => {
    const saved = localStorage.getItem('ieltsProgress');
    return saved ? JSON.parse(saved) : {
      Reading: 0,
      Writing: 0,
      Speaking: 0,
      Listening: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('ieltsProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (skill: SkillType) => {
    setProgress(prev => {
      const increment = 5; // 5% increase per completed test
      const newValue = Math.min(prev[skill] + increment, 100);
      return {
        ...prev,
        [skill]: newValue
      };
    });
  };

  const getProgress = (skill: SkillType): number => {
    return progress[skill];
  };

  return { progress, updateProgress, getProgress };
};