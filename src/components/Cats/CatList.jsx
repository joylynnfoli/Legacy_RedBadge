import React from 'react';
import './CatIndex'
 

const CatList = (props) => {
 
 return (
   <ul>
     {props.cats.map((cat, index) => <li key = {index}>{cat}</li>)}
   </ul>
 )}
     
 
export default CatList