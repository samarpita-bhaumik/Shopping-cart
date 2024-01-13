import { useState,useEffect } from 'react';
import './App.css';
import Productrow1 from './Productrow1';
const Product_list = () =>{
   const [data, setData] = useState([]);
   const apiCall = async () =>
   {
      let result= await fetch("http://localhost:3001/products");
      result= await result.json();
      setData(result);
      return;
   } 
   useEffect( ()=> {
       apiCall();
       return;
   },[])
   console.warn("res",data);
    return(
        <>
         <div className="featured">
            {
                data.map((item) => {
                    const itemVal = [];
                    item.map((initem) => {
                       itemVal.push(initem);
                    })
                    return(
                        <Productrow1
                         a_1={itemVal[0].imagePath}
                         a_2={itemVal[0].prodName}
                         a_3={itemVal[0].prodPrice}
                         a_4={itemVal[0].productId}
                         a_5={itemVal[1].imagePath}
                         a_6={itemVal[1].prodName}
                         a_7={itemVal[1].prodPrice}
                         a_8={itemVal[1].productId}
                         a_9={itemVal[2].imagePath}
                         a_10={itemVal[2].prodName}
                         a_11={itemVal[2].prodPrice}
                         a_12={itemVal[2].productId}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default Product_list;





