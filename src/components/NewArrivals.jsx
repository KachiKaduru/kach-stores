import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Preview from "./Preview";
import { useStore } from "../contexts/StoreContext";

export default function NewArrivals() {
  const [isLoading, setIsLoading] = useState(false);
  const [arrivals, setArrivals] = useState([]);
  const { setCategory } = useStore();

  useEffect(function () {
    async function getArrivals() {
      setIsLoading(true);
      try {
        setCategory([]);
        const res = await axios.get(`https://clothin-line.onrender.com/api/product/newArrivals`);

        const data = res.data.data;
        // console.log(data);
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
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {arrivals.map((item) => (
            <Preview item={item} key={item._id} />
          ))}
        </>
      )}
    </div>
  );
}
