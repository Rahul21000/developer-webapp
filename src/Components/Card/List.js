
import ProductProfile from "./Card";
import {productData} from "../data";

function List() {
  const listItems=productData.map((product) => <li key={product.id}>
    <ProductProfile
      productId={product.id}
      productImage={product.image}
      productName={product.name}
      productTitle={product.title}
      maxPrice={product.maxPrice}
      discount={product.discount}
    />
  </li>)
  return (
    <ul style={{display:"flex",gap:"20px"}}>
        {listItems}
    </ul>
  );
}

export default List;
