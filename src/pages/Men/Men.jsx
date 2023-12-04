import React, { useEffect, useState } from "react";
import MenSlide from "../../components/Slides/MenSlide/MenSlide";
import { apiUrl, projectId } from "../../helper/apiDetails";
import NewArrival from "../../components/NewArrival/NewArrival";
import Loader from "../../components/Loader/Loader";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Pagination from "../../components/Pagination/Pagination";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { useSearch } from "../../provider/SearchProvider";
import NoProductMessage from "../../components/NoProductMessage/NoProductMessage";

export default function Men() {
  const { searchTerm } = useSearch();
  const [isLoading, setIsLoading] = useState(false);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(0);
  const [subCategory, setSubCategory] = useState("");

  const handleCategory = (category) => {
    setSubCategory(category);
    setCurrentPage(1);
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?filter={"gender":"Men"}&page=${currentPage}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.data);
      console.log("Products-", products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getNewArrivalProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?filter={"sellerTag":"new arrival","gender":"Men"}&limit=20`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setIsLoading(false);
      setNewArrivalProducts(jsonData.data);
      console.log(newArrivalProducts);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter by search
  const getProductsBySearch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?search={"name":"${searchTerm}"}&page=${currentPage}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.data);
      console.log("Products-", products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Pagination Starts
  const handleNext = () => {
    if (products.length < 20) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const handleGoClick = () => {
    const newPage = Number(goToPage);
    if (!isNaN(newPage) && newPage >= 1) {
      setCurrentPage(newPage);
    }
  };

  const handleGotoPageForm = (e) => {
    e.preventDefault();
    setGoToPage(Number(goToPage));
    setGoToPage(0);
  };

  // Pagination Ends

  useEffect(() => {
    getNewArrivalProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  useEffect(() => {
    getProductsBySearch();
  }, [searchTerm]);

  return (
    <div>
      <BottomNavbar handleCategory={handleCategory} />
      <MenSlide />
      {/* {isLoading ? (
        <Loader />
      ) : (
        <NewArrival newArrivalProducts={newArrivalProducts} />
      )} */}
      <h3>ALL PRODUCTS</h3>(
      <>
        {!products ? (
          <NoProductMessage />
        ) : (
          <ProductContainer products={products} isLoading={isLoading} />
        )}
        <Pagination
          currentPage={currentPage}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleGoChange={(e) => setGoToPage(e.target.value)}
          handleGoClick={handleGoClick}
          gotoPageValue={Number(goToPage)}
          handleSubmit={handleGotoPageForm}
        />
      </>
      )
    </div>
  );
}
