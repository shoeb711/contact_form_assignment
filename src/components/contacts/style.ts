import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem;
`;

export const ContactCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  margin-top: 5rem;
  align-self: baseline;
`;

export const ContactCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
`;
