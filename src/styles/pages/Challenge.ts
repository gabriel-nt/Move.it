import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Inter;
    font-size: 2.3rem;
    line-height: 46px;
    padding-bottom: 40px;
    color: ${({ theme }) => theme.colors.title};
  }

  section {
    align-content: center;

    table {
      width: 100%;
      border-spacing: 0;
      border-spacing: 0 8px;

      thead {
        td {
          padding: 1rem;
          font-weight: bold;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.text};
          text-transform: uppercase;
        }
      }

      tbody {
        tr {
          height: 96px;
          margin-bottom: 8px;

          background: ${({ theme }) => theme.colors.content};

          td {
            padding: 1rem;
            font-weight: 500;

            &:first-of-type {
              text-align: center;
              border-right: 4px solid ${({ theme }) => theme.colors.background};
            }

            &.description {
              display: flex;
              align-items: center;
              padding-top: 2rem;
            }

            img {
              max-width: 50px;
              margin-right: 16px;
            }

            span {
              color: ${({ theme }) => theme.colors.blueOne};
            }

            p {
              max-width: 390px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            &:first-child {
              border-top-left-radius: 8px;
              border-bottom-left-radius: 8px;
            }

            &:last-child {
              border-top-right-radius: 8px;
              border-bottom-right-radius: 8px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    section {
      display: block;
      overflow: auto;
      height: auto;
    }

    table {
      min-width: 400px;
    }

    h1 {
      font-size: 1.5rem;
      margin-top: 5rem;
      line-height: 12px;
    }
  }

  @media (max-width: 470px) {
    height: 98vh;

    h1 {
      font-size: 1.5px;
      padding-bottom: 5px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      margin-top: 4rem;
    }
  }
`;

export const Alert = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  border-left: 3px solid ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => theme.colors.content};

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.red};
    width: 24px;
    height: 24px;
  }

  p {
    padding-left: 8px;
  }
`;
