import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../viewModels/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total, isLoading } = useSelector(
    (state) => state.cart
  );
  if (isLoading) {
    return (
      <section className="cart">
        <div className="loading">
          <h1>loading...</h1>
        </div>
      </section>
    );
  }
  if (!amount) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
