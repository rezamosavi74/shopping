const CartDetail = ({ productData }) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <img src={productData.image} width={100} />
                <h3>{productData.title}</h3>
                <span>{productData.quantity}</span>
            </div>
        </div >
    )
}
export default CartDetail;