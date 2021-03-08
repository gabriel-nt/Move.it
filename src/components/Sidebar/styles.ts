import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;

  aside {
    width: 112px;
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) =>
      theme.title === 'light'
        ? css`
      linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    `
        : css`
      linear-gradient(180deg, #1b1a42 0%, rgba(255, 255, 255, 0) 100%);
    `};
    filter: drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.05));
  }

  svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    aside {
      padding: 1.5rem;
      height: 60px;

      img {
        width: 26px;
        height: 26px;
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1200px) {
    position: fixed;
    z-index: 1;

    aside {
      width: 100vw;
      padding: 2rem;
      height: 80px;
      flex-direction: row;
      background: ${({ theme }) =>
        theme.title === 'light'
          ? css`
      rgba(255, 255, 255, 1);
    `
          : css`
        #1b1a42
    `};
      background-color: div {
        flex-direction: row;
        width: 100px;
        height: auto;
      }
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;

  > div {
    position: relative;

    .active {
      color: ${({ theme }) => theme.colors.blueOne};
    }
  }

  footer {
    svg {
      color: ${({ theme }) => theme.colors.blueOne};
    }
  }

  @media (max-width: 1200px) {
    flex-direction: row;
    height: auto;
  }
`;

export const FlagSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.blueOne};
  height: 56px;
  width: 6px;
  left: -40px;
  top: -13px;
  position: absolute;
  border-radius: 0 10px 10px 0;

  @media (max-width: 1200px) {
    background-color: transparent;
    height: 56px;
    width: 6px;
    left: -40px;
    top: -13px;
    position: absolute;
    border-radius: 0 10px 10px 0;
  }
`;
