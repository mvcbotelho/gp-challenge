import styled from '@emotion/styled';

export const Container = styled.section<{ focus?: boolean; cursor: number }>`
  position: relative;
  height: 9vw;

  :not(:first-of-type) {
    margin-top: 2vw;
  }

  :last-of-type {
    margin-bottom: 2vw;
  }

  .rails {
    display: flex;
    position: absolute;
    width: fit-content;
    transform: translateX(calc(${({ cursor }): number => cursor} * -17.5vw));
    transition: transform linear 300ms;
  }

  .frame {
    position: absolute;
    left: 0;
    box-sizing: border-box;
    width: 16vw;
    height: 9vw;
    border: 0.3vw solid #fff;
    opacity: ${({ focus }): number => (focus ? 1 : 0)};
    transition: opacity ease-in-out 200ms;
  }
`;
