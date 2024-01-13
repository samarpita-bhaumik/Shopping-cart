import './App.css';
import React,{useState,useEffect} from 'react';
import CartItem from './CartItem';
const Cart = () =>{
    const [cartItems, setCartItems] = useState([]);
    let sum=0;
    useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);
    return(
        <>
           <div className="cart-container">
            {
                cartItems.map((item, index) => {
                    sum = sum + parseInt(item.prodPrice);
                    return(
                        <CartItem
                        a1={item.path}
                        a2={index}
                        a3={item.prodName}
                        a4={item.prodPrice}/>
                    )
                })
            }
        <h2>Total is ₹{sum}</h2>
        <button className="proceed-to-checkout">Proceed to Checkout</button>
    </div>
        </>
    )
}

export default Cart;