import { ChallengesProvider } from './ChallengesContext';
import { CountdownProvider } from './CountdownContext';

interface ContextProps {
  level: number;
  currentExperience: number;
  challengesComplete: number;
}

const ContextProvider: React.FC<ContextProps> = ({ children, ...props }) => (
  <ChallengesProvider {...props}>
    <CountdownProvider>
      { children }
    </CountdownProvider>
  </ChallengesProvider>
)

export default ContextProvider;