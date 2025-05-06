
import React from "react"
import './productdetails.css'


function productDetails(props) {
    console.log(props)
    const styles={
        width: "18rem"
        
    }
    const Proudct = props.productObj;

    return (
        <>
            <div className="container">
                <div className="card" style={styles}>
                    <img src={Proudct.image}className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="card-title">{Proudct.name}</h5>
                            <p className="card-text">{Proudct.price}</p>
                            <p className="card-text">{Proudct. description}</p>
                            <button onClick={()=>props.addtocart(Proudct.name)} className="btn btn-primary">Add To Cart</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default productDetails