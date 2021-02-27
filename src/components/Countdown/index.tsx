import { useContext } from 'react';
import { Container, Button } from './styles';
import { CountdownContext } from 'hooks/CountdownContext';


const Countdown = () => {
  const { 
    minutes, 
    seconds, 
    isActive, 
    hasFinished,
    handleStartCountdown, 
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {
        hasFinished ? (
          <Button 
            disabled
          >
            Ciclo encerrado
            <img src="icons/finish.svg" alt="Finish icon"/>
          </Button>
        ) : (
          <>
            { 
              isActive ? (
                <Button 
                  type="button" 
                  className="button-active"
                  onClick={resetCountdown}
                >
                  Abandonar ciclo
                  <img src="icons/close.svg" alt="Close icon"/>
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={handleStartCountdown}
                >
                  Iniciar um ciclo
                </Button>
              )
            }
          </>
        )
      }

      
    </>
  )
}

export default Countdown;