import { useContext } from "react"
import { Link } from "react-router-dom"

// Context
import { cartContex } from "../../context/CartContex"

// Functions
import { isInCart, quantityCount, shorten } from "../../helper/functions"

// Icons
import { TrashIcon } from "@heroicons/react/24/outline";
import  trash  from "../../assets/trash.svg"


export const Product = ({ productData }) => {

    const { state, dispatch } = useContext(cartContex);

    return (
        <div className="group relative">
            <Link to={`/products/${productData.id}`}>
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={productData.image} alt="product" />
                </div>
            </Link>

            <div className="my-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                        <Link to={`/products/${productData.id}`}>
                            <span classname="">{shorten(productData.title)}
                            </span>
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{productData.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{productData.price}</p>
            </div>
            <div>
                <div className="flex">
                    {
                        isInCart(state, productData.id) ?
                            <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>add To cart</button>
                    }
                    {quantityCount(state, productData.id) > 0 && <span className="text-reed2 font-bold mx-1 leading-8">{quantityCount(state, productData.id)}</span>}
                    {
                        quantityCount(state, productData.id) === 1 && <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "REMOVE", payload: productData })}>
                            {/* <img className="m-auto" src={trash} width={13} alt="remove" /> */}
                            <TrashIcon class="h-5 w-5 mx-auto text-gray-500" />
                            </button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 && <button className="bg-reed2 hover:bg-reed1 text-white hover:text-reed2 font-bold w-8 h-8 rounded" onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }


                </div>
            </div>
        </div>
    )
}