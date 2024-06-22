import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./cartSlice";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    console.log("products: ", products);
    const dispatch = useDispatch();

    // Calculate the total quantity and amount
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0); 

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <div id="cart-items">
                {products.map((product) => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                        <div>
                            <button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                        </div>
                        <div>${(product.quantity * product.price).toFixed(2)}</div>
                    </div>
                ))}
            </div>
            <div id="cart-total">
                <p>Total Quantity: <span id="totalQuantity">{totalQuantity}</span></p>
                <p>Total Amount: <span id="totalAmount">${totalAmount.toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default Cart;
