import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './state/card';
import { userSlice } from './state/user';

export const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    user: userSlice.reducer
  }
});

export type StructureStore = ReturnType<typeof store.getState>;

export default store;
