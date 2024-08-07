import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import NewArrivals from "../components/NewArrivals";

export default function Home() {
  const { category } = useStore();
  // console.log(category);

  return (
    <section className="home">
      <Header />
      <Searchbar />
      <CategoriesBar />

      <Outlet />
      {category.length < 1 && <NewArrivals />}
    </section>
  );
}
