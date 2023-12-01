import ProducrCard from "../ProductCard/ProducrCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProducrCard product={product} key={product._id} />
      ))}
    </div>
  );
}
