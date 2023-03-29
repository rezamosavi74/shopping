import { createContext, useEffect, useState } from "react"

// API
import { getProducts } from "../services/api";

// Context
export const productsContext = createContext();

const ProductContextProvider = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProduct(await getProducts())
        }
        fetchAPI();
    }, [])
    return (
        <productsContext.Provider value={product}>
            {props.children}
        </productsContext.Provider>
    )
}

export default ProductContextProvider;