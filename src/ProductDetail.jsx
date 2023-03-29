import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "./context/ProductContext";

const ProductDetail = () => {
    const {id} = useParams();
    const products = useContext(productsContext);
    const data = products[id - 1];

    return (
        <div>
            <img src={data.image} alt="product" width={150}/>
            <h3>{data.title}</h3>
            <p>{data.price}</p>
            <div>
                <p><span>category: </span> {data.category}</p>
                <div>
                    <button>add To cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;