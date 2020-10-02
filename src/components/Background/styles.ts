import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 6vw);
  height: 100vh;
  margin-left: 6vw;
  background: #000;
  overflow: hidden;

  img {
    width: 100%;
  }

  .shadow {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8),
      50%,
      transparent 60%
    );
  }

  .fade-out {
    animation: fade-out ease 500ms;
  }

  .fade-in {
    animation: fade-in ease 500ms forwards;
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
