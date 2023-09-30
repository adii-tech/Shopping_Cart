import { ADDCART, REMOVECART } from "../actions/actionType";

import React from 'react'
 const initialList=[];

const cartReducer = (list=initialList, actions) => {
   if(actions.type==ADDCART){
      return [...list, actions.id];
   }
   else if(actions.type==REMOVECART){
    return list.filter((card)=>card.id=!actions.id);
   }
   
}

export default cartReducer
