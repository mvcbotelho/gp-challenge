import styled from '@emotion/styled';

export default styled.button<{ focus?: boolean }>`
  padding: 1vw 1.9vw 1vw 1.9vw;
  color: #666;
  line-height: 1.8vw;
  font-size: 1.8vw;
  font-weight: bold;
  background-color: transparent;
  border: 0.1vw solid #666;
  border-radius: 0.3vw;
  transition: all ease-in-out 200ms;

  ${({ focus }): string => {
    if (focus)
      return `
      color: #000;
      background-color: #FFF;
      border-color: #FFF;
      transform: scale(1.08);
    `;
    return '';
  }}
`;
