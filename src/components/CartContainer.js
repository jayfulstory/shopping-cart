import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/CartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector(store => store.cart);
  return amount < 1 ? (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
        <h4 className='empty-cart'>なにも入っていません・・・😿</h4>
      </header>
    </section>
  ) : (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
