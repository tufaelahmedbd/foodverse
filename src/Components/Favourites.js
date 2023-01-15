import Recipe from "./Recipe";

const Favorites = ({ savedItems }) => {
  return (
    <div className="favourite-section">
      {savedItems.length === 0 && (
        <p className="text-2xl sm:text-xl lg:text-4xl font-semibold text-rose-300 text-center">
          Favourite list is empty!
        </p>
      )}

      <div className="favourite-items-container container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
