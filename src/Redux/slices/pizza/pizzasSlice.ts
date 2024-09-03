import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { PizzasStateI, PizzasStateT } from './pizzaType';
import { Status } from './pizzaType';
import { fetchPizzas } from './asynkActions';

const initialState:PizzasStateI = {
  items: [],
  status: Status.LOADING, //loading, success, error
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, actions:PayloadAction<PizzasStateT[]>) {
      state.items = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectCart = (state:RootState) => state.cart;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;