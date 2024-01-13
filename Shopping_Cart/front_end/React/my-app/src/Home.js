import './App.css';
const Home = () =>{
    return(
        <>
        <h2 className="product1">Category Specials</h2>
    <div className="cat">
        <div className="r">
            <div className="col-4">
                <img src={require('./resources/male.png')}/>

            </div>
            <div className="col-4">
                <img src={require('./resources/aes1.png')}/>

            </div>
            <div className="col-4">
                <img src={require('./resources/kid1.jpg')}/>

            </div>
        </div>
    </div>
    

    <h2 className="product">Featured Products</h2>
    <div className="featured">
        <div className="r">
            <div className="col-4">
                <img src={require('./resources/bluedress.png')}/>
                <h4>Blue cord dress</h4>
                <p><b>Rs. 700</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
            </div>
            <div className="col-4">
                <img src={require('./resources/jeans.jpg')}/>
                <h4>Jeans</h4>
                <p><b>Rs. 1000</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="col-4">
                <img src={require('./resources/kid.jpeg')}/>
                <h4>Green cord set</h4>
                <p><b>Rs. 800</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>
        </div>
    </div>
    
    <h2 className="product">Festive Offers</h2>
    <div className="featured1">
        <div className="row">
            <div className="col-4">
                <img src={require('./resources/offer.png')}/>
            </div>
            <div className="col-4">
                <p><b>Available on Habra Fashion</b></p>
            </div>
        </div>
    </div>
        
        </>
    )
}

export default Home;