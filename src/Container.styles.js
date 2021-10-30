import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 3rem;

  @media screen and (min-width: 720px) {
    max-width: 600px;
  }
  @media screen and (min-width: 920px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1165px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1350px) {
    max-width: 1000px;
  }
`;
