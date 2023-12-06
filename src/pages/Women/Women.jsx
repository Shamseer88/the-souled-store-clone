import React, { useEffect, useState } from "react";
import WomenSlide from "../../components/Slides/WomenSlide/WomenSlide";
import NewArrival from "../../components/NewArrival/NewArrival";
import { apiUrl, projectId } from "../../helper/apiDetails";
import Loader from "../../components/Loader/Loader";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Pagination from "../../components/Pagination/Pagination";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import { useSearch } from "../../provider/SearchProvider";

export default function Women() {
  const { searchTerm } = useSearch();
  const [isLoading, setIsLoading] = useState(false);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(0);
  const [subCategory, setSubCategory] = useState("");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?filter={"gender":"Women"}&page=${currentPage}`,
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

  const getNewArrivalProducts = async () => {
    const response = await fetch(
      `${apiUrl}ecommerce/clothes/products?filter={"sellerTag":"new arrival","gender":"Women"}&limit=15`,
      {
        headers: {
          projectId: projectId,
        },
      }
    );
    const jsonData = await response.json();
    setNewArrivalProducts(jsonData.data);
  };

  // Filter by search
  const getProductsBySearch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}ecommerce/clothes/products?search={"name":"${searchTerm}"}&filter={"gender":"Women"}&page=${currentPage}`,
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
      <BottomNavbar />
      <WomenSlide />
      {isLoading ? (
        <Loader />
      ) : (
        <NewArrival newArrivalProducts={newArrivalProducts} />
      )}
      <h3>ALL PRODUCTS</h3>

      <>
        {!products ? (
          <NoProductMessage />
        ) : (
          <ProductContainer products={products} />
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
