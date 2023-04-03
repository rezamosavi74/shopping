import { useContext } from "react";
import { cartContex } from "../context/CartContex";
import CartDetail from "./CartDetail";

const Cart = () => {
    const { state } = useContext(cartContex)
    console.log(state)
    return (
        <div>
            {state.selectedItems.map(item => <CartDetail key={item.id} productData={item} />)}
        </div>
    )
}
export default Cart;