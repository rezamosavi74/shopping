import { Link } from "react-router-dom"
import { shorten } from "../../helper/functions"


export const Product = ({productData}) => {

    
    
    return (
        <div>
            <img src={productData.image} alt="product" width={150}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detail</Link>
                <div>
                    <button>add To cart</button>
                </div>
            </div>
        </div>
    )
}