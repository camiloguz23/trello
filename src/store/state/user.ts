import { type User } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const UserDefault: User = {
  document: 0,
  email: '',
  name: '',
  nameRol: '',
  password: '',
  tickets: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserDefault,
  reducers: {
    onAddUser: (state, action) => action.payload
  }
});

export const { onAddUser } = userSlice.actions;
