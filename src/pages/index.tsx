import { useRouter } from 'next/router';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

import LogoImg from '../assets/logo.svg';
import BackgroundImg from '../assets/background-home.svg';

import { Container, Content, Input, Github } from 'styles/pages/Index';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'hooks/UserContext';

const SignIn = () => {
  const router = useRouter();
  const { login } = useContext(UserContext);
  const [name, setName] = useState('');
  const [variant, setVariant] = useState('base');

  useEffect(() => {
    const user = localStorage.getItem('login');

    if (user) {
      setVariant('finish');

      setTimeout(() => {
        router.push('/home');
      }, 300);
    }
  }, [router]);

  const handleClick = () => {
    fetch(`https://api.github.com/users/${name}`)
      .then(resp => resp.json())
      .then(function (data) {
        login(data);
        setVariant('finish');

        setTimeout(() => {
          router.push('/home');
        }, 300);
      });
  };

  return (
    <Container
      initial="base"
      animate={variant}
      transition={{ duration: 0.45 }}
      variants={{
        finish: { x: '-100%' },
        base: {},
      }}
    >
      <section>
        <BackgroundImg />

        <div className="content">
          <Content
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '-100%' },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <LogoImg />
            <h1>Bem vindo</h1>

            <Github>
              <FaGithub />
              <span>Faça login com seu Github para começar</span>
            </Github>

            <Input>
              <input
                type="text"
                placeholder="Seu user do Github"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <button onClick={handleClick}>
                <FaArrowRight />
              </button>
            </Input>
          </Content>
        </div>
      </section>
    </Container>
  );
};

export default SignIn;
