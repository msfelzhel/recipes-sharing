import Catigories from "../../components/mainpage/catigories";
import RecipesList from "../../components/mainpage/recipes-list";
import Welcome from "../../components/mainpage/welcome";

export const MainPage = () => {
    
    return (
        <>
            <Welcome />
            <RecipesList />
            <Catigories />
        </>
    );
};
