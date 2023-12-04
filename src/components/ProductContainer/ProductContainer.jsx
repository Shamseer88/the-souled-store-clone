import Loader from "../Loader/Loader";
import ProductList from "../ProductList/ProductList";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductContainer.css";

export default function ProductContainer({
  products,
  getProductByBrand,
  isLoading,
}) {
  return (
    <div className="product-container">
      <div className="product-container-left">
        <Sidebar getProductByBrand={getProductByBrand} />
      </div>

      <div className="product-container-right">
        {isLoading ? <Loader /> : <ProductList products={products} />}
      </div>
    </div>
  );
}
