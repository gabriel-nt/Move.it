import { ChallengesContext } from 'hooks/ChallengesContext';
import { useContext } from 'react';
import { Container } from './styles';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
