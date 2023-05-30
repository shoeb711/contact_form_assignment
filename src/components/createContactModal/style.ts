import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  background: antiquewhite;
  padding: 1.5rem;
  width: 320px;
  border-radius: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaveButtonDiv = styled.div`
  margin: 0 auto;

  button {
    cursor: pointer;
  }
`;

export const CrossIcon = styled.div`
  text-align: end;
  cursor: pointer;
`;
