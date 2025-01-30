import { useCartDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cartSlice";

type ProductProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

function Product({ id, title, price, image }: ProductProps) {
  const dispatch = useCartDispatch();

  function handelAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }
  return (
    <div className='product'>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p className='product-price'>{price}</p>
      </div>
      <p className='product-actions'>
        <button onClick={handelAddToCart}>افزودن به سبد خرید</button>
      </p>
    </div>
  );
}

export default Product;
