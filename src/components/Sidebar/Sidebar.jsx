import { useEffect, useState } from "react";
import { projectId, apiUrl } from "../../helper/apiDetails";
import "./Sidebar.css";
import Sorting from "../Sorting/Sorting";

export default function Sidebar() {
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
    console.log("Brands", brands);
  };

  let uniqueBrands = brands.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  console.log(uniqueBrands);

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="sidebar">
      <h4>Brands</h4>
      <div className="brand-buttons">
        {uniqueBrands.map((brand, index) => (
          <button key={index}>{brand}</button>
        ))}
      </div>
      <div className="sidebar-sorting">
        <h4>Sorting</h4>
        <Sorting />
      </div>
    </div>
  );
}
