import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart,removeCart } from "../redux/actions/cartAction";
import { useState, useEffect } from "react";


const Mycart=()=>{
   
   
    return(
          <h1>My Cart</h1>

    );
}

export default Mycart;