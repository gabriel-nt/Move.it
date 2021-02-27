import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';

  font-weight: 600;
  color: ${({ theme }) => theme.colors.blueDark};

  div {
    flex: 1;
    display: flex;
    align-items: center;

    justify-content: space-evenly;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 60px rgba(0,0,0, 0.05);

    border-radius: 5px;
    font-size: 8.25rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blueOne};

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 600;

  transition: background .2s;

  img {
    margin-left: 7px;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.blueTwo};
  }

  &.button-active {
    color: ${({ theme }) => theme.colors.grayDark};
    background: ${({ theme }) => theme.colors.white};

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};

      img {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grayDark};
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  }
`;