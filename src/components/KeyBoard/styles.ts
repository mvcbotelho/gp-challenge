import styled from '@emotion/styled';

export const WraperKeyboard = styled.section`
padding-left: 18px;
  height: 100vh;
  max-width: 318px;
`;

export const Search = styled.h3`
  border: 1px solid #000;
  padding: 10px;
  overflow: overlay;
`;

export const KeyboardList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  font-weight: 600;
  background-color: #000;
  color: #fff;

  li {
    width: 50px;
    height: 50px;
    border: 1.4px solid #2f2d2d;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .large-buttons {
    
  }
`;

//.activeButton {
//  background-color: #e50914;
//}
