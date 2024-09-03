import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasParamsT, PizzasStateT } from "./pizzaType";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<PizzasStateT[],FetchPizzasParamsT>(
    'pizzas/fetchPizzasStatus',
    async (params) => {
      const { category, sortBy, order, currentPage, search } = params;
      const response = await axios.get<PizzasStateT[]>(
        `https://6607567abe53febb857f6cdf.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
      );
      return response.data;
    },
  );