import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContex } from "../../context/CartContex"
import { isInCart, quantityCount, shorten } from "../../helper/functions"


export const Product = ({ productData }) => {

    const { state, dispatch } = useContext(cartContex);

    return (
        <div className="group relative">
            <Link to={`/products/${productData.id}`}>
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={productData.image} alt="product" />
            </div>
            </Link>
            
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
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
                <div>
                    {
                        isInCart(state, productData.id) ?
                            <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold mr-1.5 py-2 px-4 w-10 rounded" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>add To cart</button>
                    }

                    {
                        quantityCount(state, productData.id) === 1 && <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: "REMOVE", payload: productData })}>remove</button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 && <button className="bg-blue-950 hover:bg-indigo-950 text-white font-bold py-2 px-4 w-10 rounded" onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }


                </div>
            </div>
        </div>
    )
}