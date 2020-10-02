import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 10vh;
  margin-left: 2.2vw;

  .logo {
    width: 15vw;
  }

  .description {
    margin-top: 3vh;
    margin-bottom: 5vh;
    color: #fff;
    font-weight: lighter;
    font-size: 2vw;
  }

  .buttons-wrapper {
    display: flex;
    align-items: center;

    button:first-of-type {
      margin-right: 1.15vw;
    }
  }
`;
