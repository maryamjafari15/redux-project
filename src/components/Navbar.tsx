import Cart from "./Cart";
import { useState } from "react";
import { useCartSelector } from "../redux/hooks";
 

const Navbar = () => {
  const [cartIsopen, setCartIsopen] = useState(false);

  const cartQuantitiy= useCartSelector((state)=> state.cart.items.reduce((value , item)=>value + item.qunatity, 0))

  function handelOpenCart() {
    setCartIsopen(true);
  }
  function handelCloseCart() {
    setCartIsopen(false);
  }
  return (
    <>
      {cartIsopen && <Cart onClose={handelCloseCart} />}
      <div className='navbar'>
        <button onClick={handelOpenCart}>سبد خرید({cartQuantitiy})</button>
      </div>
    </>
  );
};

export default Navbar;
