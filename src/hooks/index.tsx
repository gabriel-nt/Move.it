import {
  ChallengeFinishedProps,
  ChallengesProvider,
} from './ChallengesContext';
import { UserProvider } from './UserContext';
import { CountdownProvider } from './CountdownContext';

interface ContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challengesFinished?: Array<ChallengeFinishedProps>;
}

const ContextProvider: React.FC<ContextProps> = ({ children, ...props }) => (
  <ChallengesProvider {...props}>
    <CountdownProvider>
      <UserProvider>{children}</UserProvider>
    </CountdownProvider>
  </ChallengesProvider>
);

export default ContextProvider;
