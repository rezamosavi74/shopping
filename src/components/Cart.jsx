import { useContext } from "react";
import { cartContex } from "../context/CartContex";
import CartDetail from "./CartDetail";
import CartEmpty from "./CartEmpty";
import CartCheckout from "./CartCheckout";

const Cart = () => {
    const { state } = useContext(cartContex)
    return (
        <div>
            <header className="font-bold text-center text-4xl my-10">Shopping cart</header>
            {state.selectedItems.length ? <div className="flex flex-col w-7/12 mx-auto">{state.selectedItems.map(item => <CartDetail key={item.id} productData={item} />)}</div> : <CartEmpty data={state}/>}
            {state.totalItems > 0 && <CartCheckout />}
        </div>
    )
}
export default Cart;