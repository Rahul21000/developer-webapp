import { productData1 } from "../data";
import CardContent from "./CardContent";
function MainContent() {
  const listItems = productData1.map((product) => (
    <li key={product.id}>
      <CardContent
        productId={product.id}
        productImage={product.image}
        productName={product.name}
        productTitle={product.title}
        productRating={product.rating}
        productBadge={product.badge}
        productFeature={product.feature}
        productDescription={product.description}
        productExtraFeature={product.extrafeature}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default MainContent;
