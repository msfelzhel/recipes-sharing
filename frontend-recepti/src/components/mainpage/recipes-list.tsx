import "./recipes-list.scss";
import {trpc} from "../../lib/trpc";
import { Link, useParams } from "react-router-dom";
import { getRecipe, viewRecipeRouteParams } from "../../lib/routes";

export default function RecipesList() {
    const {recipeNick} = useParams() as viewRecipeRouteParams
    const {data, error, isLoading, isFetching, isError} = trpc.getRecipes.useQuery();
    if (isError) {
        return <span>{error.message}</span>;
    }
    if (isLoading || isFetching) {
        return <span>Loading</span>;
    }
    return (
        <section id="recipes" className="recipe-list">
            <h2>{recipeNick}</h2>
            {data.recipes.map((recipe) => {
                return (
                    <div className="recipe-card">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>
                        <button className="view-recipe-button"><Link to={getRecipe({recipeNick: recipe.nick})}>Смотреть Рецепт</Link></button>
                    </div>
                );
            })}
        </section>
    );
}
