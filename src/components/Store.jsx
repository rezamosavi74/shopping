import { useContext } from "react";
import { Product } from "./shared/Product";

// Context
import { productsContext } from "../context/ProductContext";



function Store() {
    const products = useContext(productsContext);
    
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'flex-start'}}>
            {products.isLoading ? "LOADING..." : products.info.map(product => <Product key={product.id} productData = {product} />)}
        </div>
    )
}

export default Store;