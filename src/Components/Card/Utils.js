import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export function getProductUrl(product){
    return('http://localhost:3000/'+product.productId)
}
export function getCostPrice(maxPrice,discount){
    const productCoast=maxPrice*(100-discount)/100
    return productCoast.toFixed(2);
}

export function getTrands(emoji){
    const arr=[<EmojiEventsOutlinedIcon/>,<DiamondOutlinedIcon/>]
return (arr.filter((item,index)=>index===emoji.iconId)) 
}
export function getStarIcon(){
return 
}

 

export function textRating(rating) {
    const value=rating/2;
  return (
    <Box
      sx={{
        width: 20,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
      sx={{fontSize:"16px" }}
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55,fontSize:"16px"}}  />}
      />
    </Box>
  );
}
