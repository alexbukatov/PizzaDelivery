export type PizzasStateT={
    items:{
      id:string; 
      title:string; 
      price:number; 
      sizes:number[]; 
      types:number[];
      category:number;
      rating:number 
    }
  }
  
   export enum Status{
      LOADING = 'loading',
      SUCCESS = 'success',
      ERROR = 'error',
  }
  
  export interface PizzasStateI{
    items: PizzasStateT[],
    status: Status.LOADING | Status.SUCCESS | Status.ERROR,
  }
  
  export type FetchPizzasParamsT = {
    category:string; 
    sortBy:string; 
    order:string; 
    currentPage:number; 
    search:string;
  }