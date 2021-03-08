import { useContext } from 'react';

import { Container } from './styles';
import { ChallengesContext } from 'hooks/ChallengesContext';
import { CountdownContext } from 'hooks/CountdownContext';

const ChallengesBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengesSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <div className="challenges-active">
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body icon" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" onClick={handleChallengesSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challenges-not-active">
          <strong>
            Inicie um ciclo para {'\n'} receber desafios a {'\n'} serem
            completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Complete-os e ganhe experiência e avance de level.
          </p>
        </div>
      )}
    </Container>
  );
};

export default ChallengesBox;
