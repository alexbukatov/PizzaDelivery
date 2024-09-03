export type CartStateT = {
    id:string; 
    title:string; 
    price:number; 
    size:number; 
    type:string;
    count:number;
  }
  
  export interface CartSliceStateI{
    items: CartStateT[],
    totalPrice: number,
  }