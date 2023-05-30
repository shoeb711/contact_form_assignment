import { ContactData } from '../../types';

interface InitialState {
  contactData: ContactData[];
  contactModal: boolean;
}

const initialState: InitialState = {
  contactData: [],
  contactModal: false,
};

export const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_CREATE_CONTACT_MODAL':
      return {
        ...state,
        contactModal: action.status,
      };

    case 'ADD_CONTACT_DATA':
      return {
        ...state,
        contactData: [...state.contactData, action.payload],
      };

    case 'DELETE_CONTACT_DATA':
      return {
        ...state,
        contactData: state.contactData.filter(
          (data) => data.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
