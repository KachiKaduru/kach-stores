import axios from "axios";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import { useStore } from "../contexts/StoreContext";

export default function NewArrivals() {
  const { setIsLoading } = useStore();
  const [arrivals, setArrivals] = useState([]);

  useEffect(
    function () {
      async function getArrivals() {
        setIsLoading(true);
        try {
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
    },
    [setIsLoading]
  );

  return (
    <main className="container">
      {/* <h2>{arrivals[0].category}</h2> */}

      {arrivals.map((item) => (
        <Preview item={item} key={item._id} />
      ))}
    </main>
  );
}
