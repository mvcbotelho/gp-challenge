import styled from '@emotion/styled';

interface ContainerProps {
  focus?: boolean;
  highlight?: boolean;
  showText?: boolean;
}

const colorSelector = ({ focus, highlight }: ContainerProps): string => {
  if (focus) return '#000';
  if (highlight) return '#999';
  return '#5A5A5A';
};

const backgroundSelector = ({ focus }: ContainerProps): string => {
  if (focus) return '#fff';
  return 'transparent';
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 1.2vw 0 1.2vw 2.75vw;
  color: ${colorSelector};
  background-color: ${backgroundSelector};

  > svg {
    width: 1.5vw;
    height: 1.5vw;
    margin-top: 0.1vw;
    fill: ${colorSelector};
  }

  > span {
    position: absolute;
    visibility: ${({ showText }): string => (showText ? 'visible' : 'hidden')};
    font-size: 1.2vw;
    margin-left: 2.25vw;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    ${({ showText }): string => (showText ? 'animation-name: fade-in' : '')};
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
