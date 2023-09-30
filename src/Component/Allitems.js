import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Allitems= ()=>{
 const[data, Setdata]=useState([]);
 
 useEffect(()=>{
    const fetchData=async ()=>{
        try{
        const response= await axios.get("https://dummyjson.com/products");
       // console.log(response.data.products);
        Setdata(response.data.products);
        console.log(data);
        }catch(error){
            console.log(error);
         }

    }
    fetchData();
},[])
         function add(ele){
               
         }
     console.log(data);
    return(
        <><h1>All Items</h1>
        <div className="lists">
        {
        data.map((element)=>( 
        <div className="card">
            <div className="img">
            <img src={element.images[0]} />
            </div>
             <div className="info">
                <p>Title: {element.title}</p>
                <p>Price: {element.price} </p>
             </div>
             <button onClick={()=>add(element)}>Add to Cart</button>
        </div>))
        }
        
        </div>
        </>
    );

}

export default Allitems;