import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import NewArrivals from "../components/NewArrivals";
import Showcase from "../components/Showcase";
import Spinner from "../components/Spinner";

export default function Home() {
  const { category, isLoading, handleOpen, open } = useStore();

  function closeNav() {
    if (open) handleOpen();
  }

  return (
    <section className="home" onClick={closeNav}>
      <Header />
      <Searchbar />
      <CategoriesBar />

      <Showcase>
        {isLoading && <Spinner size={30} />}
        <Outlet />
        {category.length < 1 && <NewArrivals />}
      </Showcase>
    </section>
  );
}
