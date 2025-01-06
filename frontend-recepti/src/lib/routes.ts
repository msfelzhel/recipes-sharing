const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const GetMainPage = () => '/'

export const viewRecipeRouteParams = getRouteParams({ recipeNick: true})
export type viewRecipeRouteParams = typeof viewRecipeRouteParams
export const getRecipe = ({ recipeNick }: { recipeNick: string }) => `/recipes/${recipeNick}`