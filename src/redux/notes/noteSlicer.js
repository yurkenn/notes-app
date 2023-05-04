import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  noteList: JSON.parse(localStorage.getItem('noteList')) || [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
