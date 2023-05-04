import { configureStore } from '@reduxjs/toolkit';
import noteSlicer from './notes/noteSlicer';

export default configureStore({
  reducer: {
    notes: noteSlicer,
  },
});
