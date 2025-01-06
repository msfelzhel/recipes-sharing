import "./recipes-list.scss";
import {trpc} from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getRecipe } from "../../lib/routes";

export default function RecipesList() {
    const {data, error, isLoading, isFetching, isError} = trpc.getRecipes.useQuery();
    if (isError) {
        return <span>{error.message}</span>;
    }
    if (isLoading || isFetching) {
        return <span>Loading</span>;
    }
    return (
        <section id="recipes" className="recipe-list">
            <h2>Популярные Рецепты</h2>
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
