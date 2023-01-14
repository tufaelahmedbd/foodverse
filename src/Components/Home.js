import Recipe from "./Recipe";
const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto flex flex-wrap justify-center py-10 gap-10">
      {!loading && !error && recipes.length === 0 ? (
        <p className="text-2xl sm:text-xl lg:text-4xl font-semibold text-rose-300">
          Nothing to show, please search something!
        </p>
      ) : null}

      {loading && <p>{error ? error : "loading..."}</p>}

      {recipes?.length > 0 &&
        recipes?.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
