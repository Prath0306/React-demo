import React from "react";
import ProductDetails from "./ProductDetails";


function Productlist() {
    const Products = [
        {
            id: 1,
            name: "laptop",
            price: 20000,
            image: "https://m.media-amazon.com/images/I/611AaVzaCQL._SX679_.jpg",
            description: "Lenovo ThinkPad 8th Gen Intel Core i5 Thin & Light HD Laptop (16 GB DDR4 RAM/512 GB SSD/14"
        },
        {
            id: 2,
            name: "Smartphone",
            price: 15000,
            image: "https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/17thFeb/M35_5G_Buybox_580x675.png",
            description: "Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage)"
        }
    ]

    function handletocart(name) {
        alert(`proudcts ${name} Added To Cart`)
    }

    return (
        <>
            <div className="container">
                <h2>Product List</h2>
                {Products.map((product) => (
                    <ProductDetails productObj={product} addtocart={handletocart} />
                ))}
            </div>

        </>
    )
}

export default Productlist