import { ContactData } from '../../types';

interface InitialState {
  contactData: ContactData[];
  contactModal: boolean;
  editContactModal: boolean;
  id: null | number;
  editId: null | number;
  editData: { firstName: string; lastName: string; active: string };
}

const initialState: InitialState = {
  contactData: [],
  contactModal: false,
  editContactModal: false,
  id: null,
  editData: { active: '', firstName: '', lastName: '' },
  editId: null,
};

export const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_CREATE_CONTACT_MODAL':
      return {
        ...state,
        contactModal: action.status,
      };

    case 'TOGGLE_EDIT_CONTACT_MODAL':
      return {
        ...state,
        editContactModal: action.status,
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

    case 'EDIT_CONTACT_DATA':
      return {
        ...state,
        contactData: state.contactData.map((data) => {
          if (data.id === action.id) {
            return {
              ...data,
              active: action.data.active,
              firstName: action.data.firstName,
              lastName: action.data.lastName,
            };
          } else {
            return {
              ...data,
            };
          }
        }),
      };

    case 'GET_CONTACT_ID':
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
