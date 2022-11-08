import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist'; // to connect Redux State with LocalStorage
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { LOCAL_STORAGE_KEY } from './constants';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: contactsInitialState },
  reducers: {
    addContact: {
      reducer({ contacts }, { payload }) {
        contacts.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid().slice(0, 8),
          },
        };
      },
    },
    deleteContact({ contacts }, { payload }) {
      const index = contacts.findIndex(({ id }) => id === payload);
      contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: LOCAL_STORAGE_KEY.contacts,
  storage,
};
const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
