import { ADDCART, REMOVECART } from "./actionType";


export const addCart= (cartId)=>{
   
   return {
         type: ADDCART,
          id: cartId,
   }
}

export const removeCart=(cartId)=>{
   return {
         type: REMOVECART,
         id: cartId,
   }
}