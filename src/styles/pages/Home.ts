import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 868px) {
    section {
      display: block;

      > div {
        max-width: 75%;
        margin: 3rem auto;
      }
    }
  }

  @media (max-width: 668px) {
    section > div {
      max-width: 85%;
    }
  }

  @media (max-width: 468px) {
    section > div {
      max-width: 100%;
    }
  }
`;
