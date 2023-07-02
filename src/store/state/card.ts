import { type Ticket } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const infoCardDefault: Ticket[] = [];

export const cardSlice = createSlice({
  name: 'card',
  initialState: infoCardDefault,
  reducers: {
    onAddCard: (state, action) => {
      return action.payload;
    },
    onModifyCard: (state, action) => {
      const modifyCard: Ticket = action.payload;
      const modify: Ticket[] = state.map((card) => {
        return card.idTicket === modifyCard.idTicket ? modifyCard : card;
      });
      return modify;
    },
    onDeleteCard: (state, action) => {
      const deleteIdCard: number = action.payload as number;
      return state.filter((card) => card.idTicket !== deleteIdCard);
    }
  }
});

export const { onAddCard, onDeleteCard, onModifyCard } = cardSlice.actions;
