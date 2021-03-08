import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blueOne};

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 35%;
    max-width: 992px;

    > svg {
      flex: 1;
      margin-left: -50%;
    }

    .content {
      flex: 1;
      height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 992px) {
    section {
      margin: 0 auto;

      > svg {
        display: none;
      }
    }
  }
`;

export const Content = styled(motion.div)`
  > svg {
    margin-bottom: 6rem;
  }

  h1 {
    font-family: Inter;
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 2.87rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Github = styled.div`
  display: flex;
  padding-top: 1.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    width: auto;
    height: 2.5rem;
    margin-right: 1.5rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.85rem;
    max-width: 15.8rem;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  input {
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    border: none;
    width: 100%;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2.12rem;
    padding: 1rem;
    color: white;
    padding-right: 2.2rem;
    padding-left: 2.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button {
    background: ${({ theme }) => theme.colors.green};
    border: none;
    padding: 1.2rem;
    border-radius: 0px 5px 5px 0px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;
