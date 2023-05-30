import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactData,
  toggleCreateContactModal,
} from '../../logic/actions/appActions';
import { RootState } from '../../logic/reducers/store';
import { ContactData } from '../../types';
import * as Styled from './style';

const Contacts = () => {
  const dispatch = useDispatch();

  const { contactData } = useSelector((state: RootState) => state.contact);

  console.log(contactData);

  return (
    <Styled.ContactContainer>
      <div>
        <button onClick={() => dispatch(toggleCreateContactModal(true))}>
          Create Contact{' '}
        </button>
      </div>
      <Styled.ContactCardWrapper>
        {contactData.length ? (
          contactData.map((data: ContactData) => (
            <Styled.ContactCard key={data.id}>
              <div>{data.firstName}</div>
              <div>{data.lastName}</div>
              <div>Status: {data.active}</div>
              <button>Edit</button>
              <button onClick={() => dispatch(deleteContactData(data.id))}>
                Delete
              </button>
            </Styled.ContactCard>
          ))
        ) : (
          <div>
            No Contact Found, Please Add COntact from Create Contact Button
          </div>
        )}
      </Styled.ContactCardWrapper>
    </Styled.ContactContainer>
  );
};

export default Contacts;
