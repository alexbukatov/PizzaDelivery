export enum SortPropertyEnum {
    RETING_DESC = 'rating',
    RETING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
  }
  
  export type SortT = {
    sortName: string,
    sortProperty: SortPropertyEnum;
  }
  
  export interface FilterStateI{
    searchValue: string;
    categoryId: number;
    sortType: SortT;
    currentPage: number;
  }