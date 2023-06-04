import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './state/card';

export default configureStore({
  reducer: {
    card: cardSlice.reducer
  }
});
