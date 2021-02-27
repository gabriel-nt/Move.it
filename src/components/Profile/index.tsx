import { ChallengesContext } from 'hooks/ChallengesContext';
import { useContext } from 'react';
import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  
  return (
    <Container>
      <img src="https://github.com/gabriel-nt.png" alt="Gabriel Teixeira"/>

      <div>
        <strong>Gabriel Teixeira</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile;