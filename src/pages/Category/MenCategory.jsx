import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

import Pagination from "../../components/Pagination/Pagination";
import { apiUrl, projectId } from "../../helper/apiDetails";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import { useSearch } from "../../provider/SearchProvider";
import NoProductMessage from "../../components/NoProductMessage/NoProductMessage";

export default function MenCategory() {
  const { searchTerm } = useSearch();
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(0);

  const [subCategory, setSubCategory] = useState("");

  const handleCategory = (category) => {
    setSubCategory(category);
    setCurrentPage(1);
  };

  const getProductByBrand = async (brand) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?filter={"brand":"${brand}",subCategory":"${category}","gender":"Men"}&page=${currentPage}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?filter={"subCategory":"${category}","gender":"Men"}&page=${currentPage}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsBySearch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?search={"name":"${searchTerm}"}&filter={"gender":"Men","subCategory": "${category}"}&page=${currentPage}`,
        {
          headers: {
            projectId: projectId,
          },
        }
      );
      const jsonData = await response.json();
      setProducts(jsonData.data);
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
    getProductsByCategory();
  }, [currentPage, category]);

  useEffect(() => {
    getProductsBySearch();
  }, [searchTerm]);

  return (
    <div>
      <>
        <BottomNavbar handleCategory={handleCategory} />
        {products ? (
          <ProductContainer
            products={products}
            getProductByBrand={getProductByBrand}
          />
        ) : (
          <NoProductMessage />
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
    </div>
  );
}
