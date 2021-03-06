import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import Modal from 'components/Modal';

interface ChallengeContextData {
  level: number;
  activeChallenge: ChallengeProps | undefined;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  closeModal: () => void;
  resetChallenge: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengeProps {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesProviderProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challengesFinished?: Array<ChallengeFinishedProps>;
}

export interface ChallengeFinishedProps {
  type: string;
  amount: number;
  level: number;
  description: string;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [challengesFinished, setChallengesFinished] = useState<
    ChallengeFinishedProps[]
  >(rest.challengesFinished ?? []);

  const [activeChallenge, setActiveChallenge] = useState<ChallengeProps>();

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
    Cookies.set(
      'challengesFinished',
      String(JSON.stringify(challengesFinished)),
    );
  }, [level, currentExperience, challengesCompleted, challengesFinished]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🚀', {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { type, amount, description } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(undefined);
    setChallengesCompleted(challengesCompleted + 1);

    setChallengesFinished([
      ...challengesFinished,
      {
        amount,
        description,
        type,
        level,
      },
    ]);
  }

  function resetChallenge() {
    setActiveChallenge(undefined);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        closeModal,
        currentExperience,
        challengesCompleted,
        levelUp,
        activeChallenge,
        resetChallenge,
        startNewChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}

      {isLevelUpModalOpen && <Modal />}
    </ChallengesContext.Provider>
  );
};
