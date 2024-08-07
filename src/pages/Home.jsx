import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import NewArrivals from "../components/NewArrivals";
import Showcase from "../components/Showcase";
import Spinner from "../components/Spinner";

export default function Home() {
  const { category, isLoading } = useStore();
  // console.log(category);

  console.log(isLoading);

  return (
    <section className="home">
      <Header />
      <Searchbar />
      <CategoriesBar />

      <Showcase>
        {isLoading && <Spinner />}
        <Outlet />

        {category.length < 1 && <NewArrivals />}
        {/* {isLoading ? <Spinner /> : <NewArrivals />} */}
        {/* {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Outlet />
            {category.length < 1 && <NewArrivals />}
          </>
        )} */}
      </Showcase>
    </section>
  );
}
