import {getCostPrice} from './Utils'
import {getProductUrl} from './Utils'
import './Card.css';
import Button from '../Button';
function Card({productImage,productName,productTitle,maxPrice,discount,size=100}) {
    const handleGetUrl=()=>{
        getProductUrl()
        // window.location.href
    }
    return ( 
        <div className="card">
        <img src={productImage} alt={productName} width={size} height={size}/>
        <p className='dis-text'><span>{discount}% Off</span> <span>Limited time</span></p>
        <p className='productName'>{productName}</p>
        <p className="title">{productTitle}</p>
        <div><pre><span className="coastprice">${getCostPrice(maxPrice,discount)}</span> <span className="mrp">${maxPrice}</span> <span className="discount">({discount}% Off)</span></pre></div>
       <Button onSmash={handleGetUrl}>View Deal</Button>
        </div>
     );
}

export default Card;