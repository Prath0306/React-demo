import React from "react";

function Productcat(props){
   const{ categiresArr,productDetails}=props
   let{array}=props
     
    return(

        <>

    {/*}  <ul>
            <li>{categiresArr[0]}</li>
            <li>{categiresArr[1]}</li>
            <li>{categiresArr[2]}</li>
            <li>{categiresArr[3]}</li>
            
        </ul>*/}

        <ul>
            {categiresArr.map((el,index)=>(
                <li>{el}</li>
            ))}
        </ul>
       

        <div>
        <h1>Proudct Name:  {productDetails.productName} </h1>
        <p>Price:  {productDetails.Price} </p>
        <p>Available {productDetails.isavailable ?'Yes':'No'} </p>
        </div>
      
      <ul>
        {array.map((el,index)=>(
    <li>{el}</li>
        ))}
      </ul>
        </>
    )
}
export  default Productcat