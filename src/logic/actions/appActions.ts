import { ContactData } from '../../types';

export const toggleCreateContactModal = (status: boolean) => ({
  type: 'TOGGLE_CREATE_CONTACT_MODAL',
  status,
});

export const addContactData = (data: ContactData) => ({
  type: 'ADD_CONTACT_DATA',
  payload: data,
});

export const deleteContactData = (id: number) => ({
  type: 'DELETE_CONTACT_DATA',
  payload: id,
});
