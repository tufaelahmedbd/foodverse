import { useRef, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favourites from "./Components/Favourites";
import NotFound from "./Components/NotFound";
import RecipeItem from "./Components/RecipeItem";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputFieldRef = useRef(null);
  const searchHandler = (e) => {
    e.preventDefault();

    getData(searchQuery);
    setSearchQuery("");
    inputFieldRef.current.blur();
    setRecipes([]);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
      );
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      if (data.results === 0) throw new Error("No recipe found!");
      setRecipes(data?.data?.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputFieldRef={inputFieldRef}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route
            path="/"
            element={<Home recipes={recipes} loading={loading} error={error} />}
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<RecipeItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
