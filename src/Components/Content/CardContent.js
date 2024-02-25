import Button from "../Button";
import './CardContent.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { getTrands } from "../Card/Utils";
import { textRating } from "../Card/Utils";
function CardContent({productId,productName,productImage,productTitle,productRating,productBadge,productFeature,productDescription,productExtraFeature}) {
    const handleShow=()=>{

    }
    return (<div className="cardcontent">
        <div className="icon-wrapper">{productBadge&&<div className="badge-btn more"><span>{getTrands(productBadge)}</span><span>{productBadge.type}</span></div>}
        <div className="number">{productId}</div></div>
       <div className="productimg"> <img src={productImage} alt={productTitle} /><header>{productName}</header></div>
        <article>
            <p><b>{productTitle}</b>-<span>{productFeature}</span></p>
            <h4>Main highlights</h4>
            {Object.keys(productExtraFeature).length!==0 && productExtraFeature.constructor === Object?<div className="desc1">
                <section>
                    <ul className="unordered-list">
                    {productExtraFeature.desc1.map((item,index)=><li className="feature" key={index}><span className="unorder-list">{item.rating}</span><span>{item.name}</span></li>)}
                       
                    </ul>
                </section>
                <h4>Why we love it</h4>
                <section>
                    <ul>
                    {productExtraFeature.desc2.map((item,index)=><li  className="feature" key={index}><span className="right-ion"><CheckOutlinedIcon sx={{color:"#074786",backgroundColor:"rgba(0, 0, 255, 0.1)",fontSize:"14px",padding:"2px",borderRadius:"50%"}}/></span><span>{item}</span></li>)}
                    </ul>
                </section>
            </div>:<p className="desc">{productDescription}</p>}
            <p className="more"><span>Show more</span><span ><ExpandMoreIcon/></span></p>
        </article>
        <div className="rating-div">
            <ul className="rating-lables"><li className="rating1">{productRating[0]}<sup><ErrorOutlineIcon sx={{fontSize:"12px",fontWeight:100}}/></sup></li><li className="rating2">{productRating[1]}</li><li  className="rating2">{textRating(productRating[0])}</li></ul>
<Button onSmash={handleShow}>View</Button>
        </div>
    </div>  );
}

export default CardContent;