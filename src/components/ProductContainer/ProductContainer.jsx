import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductContainer.css";

export default function ProductContainer({ products }) {
  return (
    <div className="product-container">
      <div className="product-container-left">
        <Sidebar />
      </div>
      <div className="product-container-right">
        <ProductList products={products} />
      </div>
    </div>
  );
}
