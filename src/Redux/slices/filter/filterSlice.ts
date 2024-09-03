import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortPropertyEnum } from './filterTypes';
import { SortT, FilterStateI } from './filterTypes';


const initialState:FilterStateI = {
  searchValue: '',
  categoryId: 0,
  sortType: {
    sortName: 'популярности ↑',
    sortProperty: SortPropertyEnum.RETING_DESC,
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action:PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action:PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action:PayloadAction<SortT>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action:PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action:PayloadAction<FilterStateI>) {
      if(Object.keys(action.payload).length){
        state.categoryId = Number(action.payload.categoryId);
        state.sortType = action.payload.sortType;
        state.currentPage = Number(action.payload.currentPage);
      } else{
        state.categoryId = 0;
        state.sortType = {
          sortName: 'популярности ↑',
          sortProperty: SortPropertyEnum.RETING_DESC,
        };
        state.currentPage = 1;
      }
      
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
