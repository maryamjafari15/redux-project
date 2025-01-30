import { useCartSelector, useCartDispatch } from "../redux/hooks";
import { type CartItem, addToCart, removeFromCart } from "../redux/cartSlice";

const CartItems = () => {
  const cartItems = useCartSelector((state) => state.cart.items);

  const dispatch = useCartDispatch();

  const totalprice = cartItems.reduce(
    (value, item) => value + item.price * item.qunatity,
    0
  );
  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }
  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  return (
    <div>
      {cartItems.length === 0 && <p> محصولی وجود ندارد</p>}
      <ul className='cart-items'>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
              </div>
              <div className='cart-item-actions'>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span> {item.qunatity}</span>
                <button
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {cartItems.length >0 && (
        <p className='cart-total-price'>
          مجموع:<strong>{totalprice}</strong> تومان
        </p>
      )}
    </div>
  );
};

export default CartItems;
