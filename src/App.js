import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from './features/cart/CartSlice';

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default App;
