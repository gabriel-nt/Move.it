import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Container } from '../styles/pages/Home';

import Profile from '../components/Profile';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import ChallengesBox from '../components/ChallengesBox';
import CompletedChallenges from '../components/CompletedChallenges';
import ContextProvider from 'hooks';

interface HomePageProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = (props: HomePageProps) => {
  const { level, challengesCompleted, currentExperience } = props;

  return (
    <ContextProvider level={level} challengesCompleted={challengesCompleted} currentExperience={currentExperience}>
      <Container>
        <Head>
          <title>Inicio | move.it</title>
          <meta name="title" content="Move.it" />
          <meta name="description" content="Move.it" />
        </Head>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </Container>
    </ContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home;
