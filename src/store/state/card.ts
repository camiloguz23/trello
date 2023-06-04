import { type Cards } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const infoCardDefault: Cards[] = [];

export const cardSlice = createSlice({
  name: 'card',
  initialState: infoCardDefault,
  reducers: {
    onAddCard: (state, action) => {
      return [...state, action.payload];
    },
    onModifyCard: (state, action) => {
      const modifyCard: Cards = action.payload;
      const modify: Cards[] = state.map((card) => {
        return card.id === modifyCard.id ? modifyCard : card;
      });
      return modify;
    },
    onDeleteCard: (state, action) => {
      const deleteIdCard: string = action.payload as string;
      return state.filter((card) => card.id !== deleteIdCard);
    }
  }
});

export const { onAddCard, onDeleteCard, onModifyCard } = cardSlice.actions;
