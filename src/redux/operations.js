import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://636a77a5c07d8f936d9ee251.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // payloadCreator(arg, thunkAPI)
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  // payloadCreator(arg, thunkAPI)
  async (newContact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', newContact);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  // payloadCreator(arg, thunkAPI)
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
