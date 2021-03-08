import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { RiErrorWarningLine } from 'react-icons/ri';

import ContextProvider from 'hooks';
import Sidebar from '../components/Sidebar';
import { ChallengeFinishedProps } from 'hooks/ChallengesContext';

import { Container, Alert } from '../styles/pages/Challenge';
import { useEffect, useState } from 'react';

interface ChallengePageProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challengesFinished: Array<ChallengeFinishedProps>;
}

const ChallengePage = (props: ChallengePageProps) => {
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

          <h1>Últimos desafios</h1>

          <section>
            {challengesFinished.length > 0 ? (
              <table>
                <thead>
                  <motion.tr
                    variants={{
                      show: { opacity: 1, y: '0' },
                      hidden: { opacity: 0, y: '-50%' },
                    }}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <td>Nivel</td>
                    <td>Desafio</td>
                    <td>Tipo</td>
                    <td>Experiência</td>
                  </motion.tr>
                </thead>
                <tbody>
                  {challengesFinished.map((item, index) => (
                    <motion.tr
                      key={index}
                      variants={{
                        show: { opacity: 1, y: '0' },
                        hidden: { opacity: 0, y: `-50%` },
                      }}
                      initial="hidden"
                      animate="show"
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <td>{item.level}</td>
                      <td className="description">
                        <img src={`icons/${item.type}.svg`} alt="Body icon" />
                        <p>{item.description}</p>
                      </td>
                      <td>{item.type}</td>
                      <td>
                        <span>{item.amount}</span> xp
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Alert>
                <RiErrorWarningLine />
                <p>Você não completou nenhum desafio ainda!</p>
              </Alert>
            )}
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

export default ChallengePage;
