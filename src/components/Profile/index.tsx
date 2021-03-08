import { useContext } from 'react';
import { Container } from './styles';

import { ChallengesContext } from 'hooks/ChallengesContext';
import { UserContext } from 'hooks/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src={user?.image} alt={user?.name} />

      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
