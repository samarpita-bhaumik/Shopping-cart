const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
const products = [[{prodName: "Blue cord dress", prodPrice: "700", imagePath: "https://images-static.nykaa.com/media/catalog/product/6/e/6e44d01LIKHA00003300_.jpg", productId: "1"},
                  {prodName: "Jeans", prodPrice: "1000", imagePath: "https://asset.promod.com/product/159767-gz-1675947985.jpg", productId: "2"},
                  {prodName: "Green cord set", prodPrice: "800", imagePath: "https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G62/shotview/4951/D72-731s6.jpg", productId: "3"}],
                  [{prodName: "Yellow cord set", prodPrice: "500", imagePath: "https://m.media-amazon.com/images/I/71-qje236FL._AC_UY350_.jpg", productId: "4"},
                  {prodName: "Floral Dress", prodPrice: "1000", imagePath: "https://assets.ajio.com/medias/sys_master/root/20230801/663S/64c92c9deebac147fc9de0b6/-473Wx593H-466410399-white-MODEL.jpg", productId: "5"},
                  {prodName: "Blue Saree", prodPrice: "2000", imagePath: "https://clothsvilla.com/cdn/shop/products/IMG_76_b4a7ee4d-02e2-40da-a4c1-b91507c15131_1024x1024.jpg", productId: "6"}],
                  [{prodName: "Men Shirt", prodPrice: "900", imagePath: "https://img.perniaspopupshop.com/catalog/product/e/s/ESAMM032308_1.jpg", productId: "7"},
                  {prodName: "White Top", prodPrice: "900", imagePath: "https://img3.junaroad.com/uiproducts/18718561/pri_175_p-1670075498.jpg", productId: "8"},
                  {prodName: "Men casual Pant", prodPrice: "900", imagePath: "https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant.jpg", productId: "9"}
                ]];
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})

app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})