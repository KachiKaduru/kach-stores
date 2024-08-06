import { useEffect, useState } from "react";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import Searchbar from "../components/Searchbar";
import axios from "axios";
import Preview from "../components/Preview";
import ProductsContainer from "../components/ProductsContainer";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [arrivals, setArrivals] = useState([]);

  useEffect(function () {
    async function getArrivals() {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://clothin-line.onrender.com/api/product/newArrivals`);

        const data = res.data.data;
        console.log(data);
        setArrivals(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getArrivals();
  }, []);

  return (
    <section className="home">
      <Header />
      <Searchbar />
      <CategoriesBar />

      <Outlet />

      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <ProductsContainer>
            {arrivals.map((item) => (
              <Preview item={item} key={item._id} />
            ))}
          </ProductsContainer>
        )}
      </div>
    </section>
  );
}
