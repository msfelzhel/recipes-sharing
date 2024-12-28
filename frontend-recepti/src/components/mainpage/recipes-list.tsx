import "./recipes-list.scss"


export default function RecipesList() {
    const recipes = [
        {nick: "nick1", name: "recipes1", description: "lalalal"},
        {nick: "nick2", name: "recipes3", description: "lalalal"},
        {nick: "nick2", name: "recipes3", description: "lalalal"},
    ];

    return (
        <section id="recipes" className="recipe-list">
        <h2>Популярные Рецепты</h2>
        {recipes.map((recipe) => {
            return (
                <div className="recipe-card">
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <button className="view-recipe-button">Смотреть Рецепт</button>
                </div>
            );
        })}
    </section>
    )
}