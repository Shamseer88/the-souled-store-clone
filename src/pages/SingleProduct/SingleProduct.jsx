import "./SingleProduct.css";
import { FaRegHeart } from "react-icons/fa";
import { projectId, apiUrl } from "../../helper/apiDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";

export default function SingleProduct() {
  const [product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState(0);
  const { id } = useParams();
  console.log(id);
  const getProduct = async () => {
    const response = await fetch(`${apiUrl}ecommerce/product/${id}`, {
      headers: {
        projectId: projectId,
      },
    });
    const jsonData = await response.json();
    setProduct(jsonData.data);
    console.log(product);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const {
    images = [""],
    name,
    brand,
    subCategory,
    price,
    size = [""],
    description,
  } = product;
  return (
    <>
      <BottomNavbar />
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="single-product-main-image">
            <img src={images[mainImage]} alt="" />
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h2>
              {name} : {brand}
            </h2>
            <p>{subCategory}</p>
          </div>
          <hr />
          <div className="single-product-price">
            <h2>₹ {price}</h2>
          </div>
          <div className="single-product-size">
            <p>Please select a size:</p>
            <div className="single-product-size-btns">
              {size.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </div>
          {/* <AddToCart product={singleProduct} /> */}
          <div className="cart-wishlist-btns">
            <button className="single-product-add-to-wishlist-btn">
              <FaRegHeart size={12} />
              &nbsp;Add to wishlist
            </button>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h3 className="single-product-description-heading">
              Product Details:
            </h3>
            <p style={{ maxWidth: "600px" }}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
