import './App.css';
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
const ProductItem = () =>{
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  const addToCart = (name, price, imagePathVal) => {
      let existCartItems = JSON.parse(localStorage.getItem('Cart')) || [];
      let newItem = { prodName: name, prodPrice: price, path:imagePathVal };
      existCartItems = [...existCartItems, newItem];
      localStorage.setItem('Cart', JSON.stringify(existCartItems));

      alert('Product has been added to the Cart!!');
      
  }

  const apiCall = async () => {
      let result = await fetch("http://localhost:3001/products");
      result = await result.json();
      setData(result)
  } 
  useEffect( ()=> {
      apiCall();
  },[]);

  let {id} = useParams();

  useEffect(() => {
    const foundItem = data.flat().find((inItem) => id == inItem.productId);
    setItem(foundItem);
  }, [data, id]);
    return(
        <>
       <div className="product-container">
        <div className="product-image">
        {item && item.imagePath &&<img src={item.imagePath}/>}
        </div>

        <div className="product-description">
        {item && item.imagePath &&<h2>{item.prodName}</h2>}
        {item && item.imagePath &&  <p><b>Price:</b> ₹{item.prodPrice}</p>}

            <div className="buttons-container">
                <button className="add-to-cart" onClick={() => addToCart(item.prodName, item.prodPrice, item.imagePath)}>Add to Cart</button>
                <button className="buy-now">Buy Now</button>
            </div>

            <div className="sizeDetails">
                <h4>Sizes</h4>
                <div className="row2">
                  <div className="col-7">
                    <h3>S</h3>
                  </div>
                  <div className="col-7">
                    <h3>M</h3>
                  </div>
                  <div className="col-7">
                    <h3>L</h3>
                  </div>
                  <div className="col-7">
                    <h3>XL</h3>
                  </div>
                  <div className="col-7">
                    <h3>XXL</h3>
                  </div>
                </div>
              </div>

            <div className="reviews">
                <h2>Customer Reviews</h2>

                <div className="review">
                    <p><strong>Sunny Roy:</strong> "Great product! Fits perfectly."</p>
                    <p><em>Rating: 5/5</em></p>
                </div>

                <div className="review">
                    <p><strong>Sneha Nandi:</strong> "Love the design and color."</p>
                    <p><em>Rating: 4/5</em></p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ProductItem;