import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { PATHS } from '../../constant';
import { RootState } from '../../logic/reducers/store';
import CreateContactModal from '../createContactModal';
import EditContactModal from '../editContactModal';
import * as Styled from './style';

const SidebarLayout = () => {
  const navigate = useNavigate();

  const { contactModal, editContactModal } = useSelector(
    (state: RootState) => state.contact
  );

  return (
    <>
      <Styled.SideBarContainer>
        <ul>
          <li onClick={() => navigate(PATHS.contact)}>
            <a>Contact</a>
          </li>
          <li onClick={() => navigate(PATHS.chart)}>
            <a>Charts</a>
          </li>
        </ul>
      </Styled.SideBarContainer>
      {contactModal && <CreateContactModal />}
      {editContactModal && <EditContactModal />}
    </>
  );
};

export default SidebarLayout;
