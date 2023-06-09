import { Link } from "react-router-dom";

// Icons
import { FaceFrownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";


const CartEmpty = ({ data }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <span className="flex text-reed3">{data.checkOut ? "you checked out seccessfully" : <span className="flex">cart is empty <FaceFrownIcon className="h-6 w-6 ml-2" /></span>}</span>
            <Link to="/products" className="flex flex-col mt-3 text-reed3" title="lets shop" style={{width: 122}}>
                <button className="bg-reed1 w-15 h-10 rounded ">
                    <ShoppingBagIcon className="h-8 w-8 mx-auto text-gray-500" />
                </button>
            </Link>
        </div>
    )
}
export default CartEmpty;