import { useContext } from "react"
import { cartContex } from "../../context/CartContex"
// import cart from "../../assets/cart.svg"

export const Navbar = () => {
    const cartItems = useContext(cartContex);
    return (
        <div>
            <header style={{ backgroundColor: 'red', height: 50 }}>
                <span>{cartItems.state.totalItems}</span>
            </header>
        </div>
    )
}