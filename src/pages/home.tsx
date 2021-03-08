import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';

import ContextProvider from 'hooks';
import { ChallengeFinishedProps } from 'hooks/ChallengesContext';

import { Container } from '../styles/pages/Home';

import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import ChallengesBox from '../components/ChallengesBox';
import CompletedChallenges from '../components/CompletedChallenges';

interface HomePageProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challengesFinished: Array<ChallengeFinishedProps>;
}

const Home = (props: HomePageProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const {
    level,
    challengesCompleted,
    currentExperience,
    challengesFinished,
  } = props;

  useEffect(() => {
    const storage = localStorage.getItem('login');

    if (storage) {
      setIsLoading(false);
    } else {
      router.replace('/');
    }
  }, [router]);

  return (
    <ContextProvider
      level={level}
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
      challengesFinished={challengesFinished}
    >
      {!isLoading && (
        <Container>
          <Head>
            <title>Inicio | move.it</title>
            <meta name="title" content="Move.it" />
            <meta name="description" content="Move.it" />
          </Head>
          <Sidebar />
          <ExperienceBar />

          <section>
            <motion.div
              variants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' },
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </motion.div>
            <motion.div
              variants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' },
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <ChallengesBox />
            </motion.div>
          </section>
        </Container>
      )}
    </ContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    challengesFinished,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      challengesFinished: challengesFinished
        ? JSON.parse(challengesFinished)
        : [],
    },
  };
};

export default Home;
