import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  return (
    <div className='cart-backdrop'>
      <div className="cart-modal">
      <h2> سبد خرید</h2>
      <CartItems />
      <p className='cart-actions'>
        <button onClick={onClose}>بستن</button>
      </p>
      </div>
    </div>
  );
};

export default Cart;
