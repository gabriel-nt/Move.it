import { ChallengesContext } from 'hooks/ChallengesContext';
import { useContext } from 'react';
import { Header, BarLevel, Tooltip } from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience) * 100 / experienceToNextLevel;

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <BarLevel width={`${percentToNextLevel}%`} />
        <Tooltip left={`${percentToNextLevel}%`}>{currentExperience} xp</Tooltip>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  )
}

export default ExperienceBar;