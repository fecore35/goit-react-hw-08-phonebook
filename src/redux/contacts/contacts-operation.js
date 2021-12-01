import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsAsync = createAsyncThunk(
  "contacts/getContact",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      const contacts = response.data;
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", contact);
      const newContact = response.data;
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return { id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
