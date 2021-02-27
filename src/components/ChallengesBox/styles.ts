import styled from 'styled-components';
import theme from 'styles/theme/light';

export const Container = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  text-align: center;
  padding: 1.5rem 2rem;
  box-shadow: 0 0 60px rgba(0,0,0,0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .challenges-not-active {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
      width: 90%;
    }

    p {
      display: flex;
      flex-direction: row;
      align-items: center;

      max-width: 85%;
      text-align: left;
      margin-top: 2rem;
      line-height: 1.4;

      img {
        height: 34px;
        margin-right: 1.5rem;
      }
    }
  }

  .challenges-active {
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      color: ${({ theme }) => theme.colors.blueOne};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        font-weight: 600;
        font-size: 2rem;
        margin: 1.5rem 0 1rem;
        color: ${({ theme }) => theme.colors.blueDark};
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      button {
        height: 3rem;
        border: 0;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.white};

        transition: filter .2s;

        &:first-of-type {
          background: ${({ theme }) => theme.colors.red};
        }

        &:last-of-type {
          background: ${({ theme }) => theme.colors.green};
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;