import { generatePath } from 'react-router-dom';
import './App.css';
const Productrow1 = (props) =>{
    const id1 = props.a_4;
    const id2 = props.a_8;
    const id3 = props.a_12;

    const url1= generatePath("/productitem/:id",{
        id:id1
    })
    const url2= generatePath("/productitem/:id",{
        id:id2
    })
    const url3= generatePath("/productitem/:id",{
        id:id3
    })
    return(
       <>
               <div className="r">
            <div className="col-4">
                <a href={url1}><img src={props.a_1}/></a>
                <h4>{props.a_2}</h4>
                <p><b>₹{props.a_3}</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
            </div>
            <div className="col-4">
                <a href={url2}><img src={props.a_5}/></a>
                <h4>{props.a_6}</h4>
                <p><b>₹{props.a_7}</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="col-4">
                <a href={url3}><img src={props.a_9}/></a>
                <h4>{props.a_10}</h4>
                <p><b>₹{props.a_11}</b></p>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Productrow1;