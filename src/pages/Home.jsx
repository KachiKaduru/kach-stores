import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import NewArrivals from "../components/NewArrivals";
import Showcase from "../components/Showcase";
import Spinner from "../components/Spinner";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { category, isLoading } = useStore();
  const { user } = useAuth();
  // const noCategory = ;
  // console.log(category);

  return (
    <section className="home">
      <Header />
      {user.name && <p>hey, {user.name}</p>}
      <Searchbar />
      <CategoriesBar />

      <Showcase>
        {isLoading && <Spinner />}
        <Outlet />
        {category.length < 1 && <NewArrivals />}
      </Showcase>
    </section>
  );
}
