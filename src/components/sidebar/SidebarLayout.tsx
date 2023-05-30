import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { PATHS } from '../../constant';
import * as Styled from './style';
import { RootState } from '../../logic/reducers/store';
import CreateContactModal from '../createContactModal';

const SidebarLayout = () => {
  const navigate = useNavigate();

  const { contactModal } = useSelector((state: RootState) => state.contact);

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
    </>
  );
};

export default SidebarLayout;
