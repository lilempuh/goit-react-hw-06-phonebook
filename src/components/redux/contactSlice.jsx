import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      const newContacts = state.contacts.filter(item => item.id !== payload);

      return { ...state, contacts: newContacts };
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
};

export const presistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

export const getContacts = state => state.contacts.contacts;
