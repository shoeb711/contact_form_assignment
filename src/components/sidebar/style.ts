import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  float: left;

  ul {
    list-style-type: none;
    padding: 0;
    cursor: pointer;
  }

  li {
    padding: 10px;
  }

  li a {
    text-decoration: none;
    color: #000;
  }

  li a:hover {
    color: #555;
  }
`;
