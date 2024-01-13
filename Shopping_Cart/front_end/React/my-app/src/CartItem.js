import './App.css'
import React,{useState,useEffect} from 'react';
const CartItem = (props) => {
  const [cartItems, setCartItems] = useState([]);
  let index = props.second;
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);
  const removeFromCart = (index) => {
      const updatedCart = [...cartItems];
      updatedCart.splice(index,1);
      setCartItems(updatedCart);
      localStorage.setItem('Cart', JSON.stringify(updatedCart));
      window.location.reload(false);
  }
    return(
        <div className="cart-item">
            <div className="item-details">
                <img src={props.a1} alt="Item 1"/>
                <div className="item-description">
                    <p>{props.a3}</p>
                    <p>₹{props.a4}</p>
                </div>
            </div>
            <input className="quantity-input" type="number" value="1" min="1"/>
            <button className="total-price" onClick={() => removeFromCart(props.a2)}>Remove Item</button>
        </div>
    )
}

export default CartItem;