import {Link,Route,Router,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Product_list from './Product_list';
import Cart from './Cart';
import ProductItem from './ProductItem';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
     <div className="header">
        <div className="hold">
            <div className="navigationbar">
                <div className="logo">
                    <img src={require('./resources/Logo.png')} width="125px"/>
                </div>
                <nav>
                    <ul>
                        <li><b><Link to="/">Home</Link></b></li>
                        <li><b><Link to="/productlist">Products</Link></b></li>
                        <li><b><a href="">About</a></b></li>
                        <li><b><a href="">Contacts</a></b></li>
                        <li><b><Link to="/profile">Account</Link></b></li>
                    </ul>
                </nav>
                <Link to="/cart"> <img src={require('./resources/cart.png')} width="30px" height="30px"/></Link>
            </div>
            <div className="r">
                <div className="col">
                    <h1><b>A New Style!</b></h1>
                    <a href="" className="Explore">Probing &#9755;</a>
                </div>
                <div className="col">
                    <img src={require('./resources/women_fashion.jpeg')}/>
                </div>
            </div>
        </div>
    </div>
    {/* <Home/>
    <Product_list/>
    <Cart/>
    <ProductItem/>
    <Profile/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productlist" element={<Product_list/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productitem/:id" element={<ProductItem/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
