import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Recipe from "./Recipe";

const RecipeItem = () => {
  const { id } = useParams();

  const { data: recipe, loading, error } = useFetch(id);
  if (recipe.recipe) {
    console.log(recipe.recipe);
  }
  return <div>items</div>;
};

export default RecipeItem;
