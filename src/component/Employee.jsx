import React from "react";
import './Employee.css'

function Employee(props){
    console.log(props)
   
    return(

        <>
           <h1>Employee Name is {props.name}</h1>
           <h1>Employee City is {props.city}</h1>
           
        </>
    )
}
export default Employee