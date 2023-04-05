import { useContext } from "react";
import { cartContex } from "../context/CartContex";

const CartCheckout = () => {
    const {state, dispatch} = useContext(cartContex);
    return (
        <div>
            <div className="flex flex-col w-7/12 mx-auto my-3 bg-reed1 rounded p-5">
                <div className="flex justify-between border-b border-reed3 py-3">
                    <div>TotalItems</div>
                    <div>{state.totalItems}fff</div>
                </div>
                <div className="flex justify-between py-3 font-bold">
                    <div>Subtotal</div>
                    <div>{state.totalPrice}$</div>
                </div>
            </div>
            <div className="w-7/12 mx-auto text-right">
                <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold py-2 px-4 rounded"
                onClick={() => dispatch({type: "CHECKOUT"})}>chechkout</button>
            </div>

        </div>

    )
}
export default CartCheckout;