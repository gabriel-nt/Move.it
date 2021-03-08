import { ChallengesContext } from 'hooks/ChallengesContext';
import { useContext } from 'react';
import { Header, BarLevel, Tooltip } from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );
  const percentToNextLevel =
    (Math.round(currentExperience) * 100) / experienceToNextLevel;

  return (
    <Header
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '-300%' },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <span>0 xp</span>
      <div>
        <BarLevel width={`${percentToNextLevel}%`} />
        <Tooltip left={`${percentToNextLevel}%`}>
          {currentExperience} xp
        </Tooltip>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};

export default ExperienceBar;
