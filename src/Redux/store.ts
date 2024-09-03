import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './slices/filter/filterSlice'
import cart from './slices/cart/cartSlice'; 
import pizzas from './slices/pizza/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();