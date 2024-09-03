import { CartStateT } from "../Redux/slices/cart/cartTypes" 

export const calcTotalPrice = (items:CartStateT[]) => {
    return items.reduce((sum, obj) => sum + obj.price * obj.count,0)
}
