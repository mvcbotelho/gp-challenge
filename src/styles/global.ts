import { css } from '@emotion/core';

export default css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700&display=swap');

  body {
    margin: 0;
    background-color: #000;

    *:not(script) {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans SC', sans-serif;
      font-weight: normal;
    }

    *:focus {
      outline: none;
    }
  }
`;
