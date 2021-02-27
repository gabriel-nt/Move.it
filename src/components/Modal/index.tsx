import { ChallengesContext } from 'hooks/ChallengesContext';
import { useContext } from 'react';
import { Overlay, Container } from './styles';

const Modal = () => {
  const { level, closeModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModal}>
          <img src="icons/close.svg" alt="Close modal" />
        </button>
      </Container>
    </Overlay>
  )
}

export default Modal;