import { useEffect, useState } from "react";
import { projectId, apiUrl } from "../../helper/apiDetails";
import "./Sidebar.css";
import Sorting from "../Sorting/Sorting";
import Search from "../Search/Search";

export default function Sidebar({ getProductByBrand }) {
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    const response = await fetch(
      `${apiUrl}ecommerce/clothes/products?limit=300`,
      {
        headers: {
          projectId: projectId,
        },
      }
    );
    const data = await response.json();
    const allBrands = data.data.map((item) => item.brand);
    setBrands(allBrands);
  };

  let uniqueBrands = brands.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="sidebar">
      <h4>Search</h4>
      <Search />
      <h4>Brands</h4>
      <div className="brand-buttons">
        {uniqueBrands.map((brand, index) => (
          <button key={index} onClick={() => getProductByBrand(brand)}>
            {brand}
          </button>
        ))}
      </div>
      <div className="sidebar-sorting">
        <h4>Sorting</h4>
        <Sorting />
      </div>
    </div>
  );
}
