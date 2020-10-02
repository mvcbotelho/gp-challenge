import styled from '@emotion/styled';

interface ContainerProps {
  background: string;
  focus?: boolean;
}

export const Container = styled.article<ContainerProps>`
  position: relative;
  width: 16vw;
  height: 9vw;
  background-size: cover;
  background-image: linear-gradient(transparent, 60%, rgba(0, 0, 0, 0.8)),
    url(${({ background }): string => background});

  :not(:first-of-type) {
    margin-left: 1.5vw;
  }

  .info {
    position: absolute;
    left: 0.8vw;
    bottom: 1vw;
  }

  .category {
    color: #999;
    font-size: 0.75vw;
    font-weight: bold;
    text-transform: uppercase;
  }

  .title {
    color: #fff;
    font-size: 1vw;
    font-weight: bold;
    text-transform: capitalize;
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.5vw;
    opacity: ${({ focus }): number => (focus ? 1 : 0)};
    transform: translate(-50%, -50%);
    transition: opacity ease-in-out 200ms;
  }
`;
