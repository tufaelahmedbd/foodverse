const Home = ({ recipes }) => {
  return (
    <div>
      {recipes?.map((recipe) => (
        <li key={recipe.recipe_id}>{recipe.title}</li>
      ))}
    </div>
  );
};

export default Home;
