import React, { useEffect, useState } from "react";
import WomenSlide from "../../components/Slides/WomenSlide/WomenSlide";
import NewArrival from "../../components/NewArrival/NewArrival";
import { apiUrl, projectId } from "../../helper/apiDetails";

export default function Women() {
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const getNewArrivalProducts = async () => {
    const response = await fetch(
      `${apiUrl}ecommerce/clothes/products?filter={%22sellerTag%22%3A%22new%20arrival%22%2C%20%22gender%22%3A%22Women%22}&limit=20`,
      {
        headers: {
          projectId: projectId,
        },
      }
    );
    const jsonData = await response.json();
    setNewArrivalProducts(jsonData.data);
    console.log(newArrivalProducts);
  };
  useEffect(() => {
    getNewArrivalProducts();
  }, []);
  return (
    <div>
      <WomenSlide />
      <NewArrival newArrivalProducts={newArrivalProducts} />
    </div>
  );
}
