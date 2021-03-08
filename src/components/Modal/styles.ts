import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  text-align: center;
  background: rgba(242, 243, 245, 0.8);

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors.content};

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blueOne};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    margin-top: 0.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: none;
    border: 0;
    font-size: 0;
  }
`;
