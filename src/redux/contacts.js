import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { deleteContact, addContact } = contactSlice.actions;

export default contactSlice.reducer;
