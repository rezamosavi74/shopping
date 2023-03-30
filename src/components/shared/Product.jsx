import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContex } from "../../context/CartContex"
import { shorten } from "../../helper/functions"


export const Product = ({ productData }) => {

    const { state, dispatch } = useContext(cartContex);

    return (
        <div>
            <img src={productData.image} alt="product" width={150} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detail</Link>
                <div>
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>add To cart</button>
                </div>
            </div>
        </div>
    )
}