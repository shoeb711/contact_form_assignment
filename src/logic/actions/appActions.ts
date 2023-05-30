import { ContactData } from '../../types';

export const toggleCreateContactModal = (status: boolean) => ({
  type: 'TOGGLE_CREATE_CONTACT_MODAL',
  status,
});

export const toggleEditContactModal = (status: boolean) => ({
  type: 'TOGGLE_EDIT_CONTACT_MODAL',
  status,
});

export const addContactData = (data: ContactData) => ({
  type: 'ADD_CONTACT_DATA',
  payload: data,
});

export const editContactData = (
  data: { firstName: string; lastName: string; active: string },
  id: number
) => ({
  type: 'EDIT_CONTACT_DATA',
  data: data,
  id: id,
});

export const deleteContactData = (id: number) => ({
  type: 'DELETE_CONTACT_DATA',
  payload: id,
});

export const getContactId = (id: number) => ({
  type: 'GET_CONTACT_ID',
  payload: id,
});
