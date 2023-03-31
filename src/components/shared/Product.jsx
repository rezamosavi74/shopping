import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContex } from "../../context/CartContex"
import { isInCart, quantityCount, shorten } from "../../helper/functions"


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
                    {/* {state.selectedItems[productData.id - 1].quantity ? <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>add To cart</button> : <button onClick={() => dispatch({ type: "REMOVE", payload: productData })}>remove</button>} */}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>add To cart</button>
                    }

                    {
                        quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE", payload: productData })}>remove</button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }
                    

                </div>
            </div>
        </div>
    )
}