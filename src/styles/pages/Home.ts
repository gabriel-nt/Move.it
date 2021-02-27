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
`;

export const LeftContainer = styled.div`

`;
