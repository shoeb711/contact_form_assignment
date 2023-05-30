import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editContactData,
  toggleEditContactModal,
} from '../../logic/actions/appActions';
import * as Styled from './style';
import { RootState } from '../../logic/reducers/store';

const EditContactModal = () => {
  const dispatch = useDispatch();

  const { contactData, id } = useSelector((state: RootState) => state.contact);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [active, setActive] = useState('');

  useEffect(() => {
    const data = contactData.filter((data) => data.id === id);

    setFirstName(data[0].firstName);
    setLastName(data[0].lastName);
    setActive(data[0].active);
  }, [contactData, id]);

  const handleSaveContact = () => {
    dispatch(editContactData({ firstName, lastName, active }, id));
    dispatch(toggleEditContactModal(false));
  };

  return (
    <Styled.ModalContainer>
      <Styled.CrossIcon onClick={() => dispatch(toggleEditContactModal(false))}>
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
        <div>Status: </div>
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

export default EditContactModal;
