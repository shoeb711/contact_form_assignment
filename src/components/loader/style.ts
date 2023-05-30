import styled, { keyframes } from 'styled-components';

export const PageLoader = styled.div`
  background-color: transparent;
  height: 100vh;
  display: flex;
  padding-top: 200px;
  align-items: flex-start;
  justify-content: center;
`;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(359deg);
    }`;

export const PageSpinner = styled.div`
  border: 4px solid transparent;
  border-top: 4px solid #45b26b;
  border-bottom: 4px solid #45b26b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`;
