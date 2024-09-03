import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { getCartLocalStor } from '../../../utils/getCartLocalStor'; 
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { CartSliceStateI, CartStateT } from '../cart/cartTypes';



const cartData = getCartLocalStor();

const initialState:CartSliceStateI = {
  items: cartData.items,
  totalPrice: cartData.totalPrice,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartStateT>) {
      const comparisonItems = state.items.find((item) => item.id === action.payload.id);
      if (comparisonItems) {
        comparisonItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const comparisonItems = state.items.find((item) => item.id === action.payload);
      if (comparisonItems) {
        comparisonItems.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;
export default cartSlice.reducer;