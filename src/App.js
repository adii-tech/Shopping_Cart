import React from "react";
import Navbar from "./Component/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Allitems from "./Component/Allitems";
import Mycart from "./Component/Mycart";
import { useState } from "react";

const App=()=>{
 const [card,setCard]=useState([]);
    return(
        <BrowserRouter>
         <Navbar /> 
           <Routes>
            <Route path="/" element={<Allitems  />} />
            <Route path="/cart" element={<Mycart/>}/>
           </Routes>
           </BrowserRouter>
    );
}

export default App;