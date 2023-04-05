import { useContext } from "react";
import { cartContex } from "../context/CartContex";

// Icons
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CartDetail = ({ productData }) => {
    const { dispatch } = useContext(cartContex)

    return (
        <div className="flex justify-between border-t border-reed1 py-3 mt-2">
            <div className="basis-1/4">
                <img className="" src={productData.image} width={100} />
            </div>

            <h3 className="basis-1/2 px-3 font-bold">
                <Link to={`/products/${productData.id}`} target="_blank">
                    <span>{productData.title}</span>
                </Link>
            </h3>
            <div className="basis-1/4 flex justify-center">
                <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button>
                <span className="text-reed2 font-bold mx-1 leading-8">{productData.quantity}</span>
                {productData.quantity > 1 ?
                    <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button> :
                    <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "REMOVE", payload: productData })}>
                        <TrashIcon className="h-5 w-5 mx-auto text-gray-500" />
                    </button>}
            </div>
            <span className="basis-1/4 text-right">{productData.price} $</span>
        </div>
    )
}
export default CartDetail;