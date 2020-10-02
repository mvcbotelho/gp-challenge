import styled from '@emotion/styled';

export const Container = styled.div<{ focus: boolean }>`
  z-index: 1000;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ focus }): string => (focus ? '16vw' : '7vw')};
  height: 100vh;
  background-color: #000;
  transition: width ease 300ms;
`;
