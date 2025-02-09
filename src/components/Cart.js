import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCartItems } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCartItems());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto bg-gray-50 p-2 rounded-2xl">
        <button
          className="p-2 m-2 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
