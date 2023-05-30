import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleCreateContactModal,
  addContactData,
} from '../../logic/actions/appActions';
import * as Styled from './style';

const CreateContactModal = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [active, setActive] = useState('Active');

  const handleSaveContact = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1; // this line will create random num upto 1000
    dispatch(addContactData({ firstName, lastName, active, id: randomNumber }));
    dispatch(toggleCreateContactModal(false));
  };

  return (
    <Styled.ModalContainer>
      <Styled.CrossIcon
        onClick={() => dispatch(toggleCreateContactModal(false))}>
        X
      </Styled.CrossIcon>
      <Styled.InputWrapper>
        <div>First Name: </div>
        <div>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <div>Last Name: </div>
        <div>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <div>Status</div>
        <Styled.InputCheckBoxWrapper>
          <div>
            <input
              type='radio'
              id='active'
              name='contact_active'
              value='Active'
              checked={active === 'Active'}
              onChange={() => setActive('Active')}
            />
            <label htmlFor='active'>Active</label>
          </div>
          <div>
            <input
              type='radio'
              id='inActive'
              name='contact_active'
              value='InActive'
              checked={active === 'InActive'}
              onChange={() => setActive('InActive')}
            />
            <label htmlFor='inActive'>In Active</label>
          </div>
        </Styled.InputCheckBoxWrapper>
      </Styled.InputWrapper>

      <Styled.SaveButtonDiv>
        <button onClick={handleSaveContact}>Save Contact</button>
      </Styled.SaveButtonDiv>
    </Styled.ModalContainer>
  );
};

export default CreateContactModal;
