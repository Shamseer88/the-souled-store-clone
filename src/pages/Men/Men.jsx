import React, { useEffect, useState } from "react";
import MenSlide from "../../components/Slides/MenSlide/MenSlide";
import { apiUrl, projectId } from "../../helper/apiDetails";
import NewArrival from "../../components/NewArrival/NewArrival";

export default function Men() {
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const getNewArrivalProducts = async () => {
    const response = await fetch(
      `${apiUrl}ecommerce/clothes/products?filter={%22sellerTag%22%3A%22new%20arrival%22%2C%20%22gender%22%3A%22Men%22}&limit=20`,
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
      <MenSlide />
      <NewArrival newArrivalProducts={newArrivalProducts} />
    </div>
  );
}
