import "./app.css";
import AboutUs from "./components/mainpage/about-us";
import Catigories from "./components/mainpage/catigories";
import Header from "./components/mainpage/header";
import RecipesList from "./components/mainpage/recipes-list";
import Welcome from "./components/mainpage/welcome";


export function App() {
    return (
        <>
            <Header />
            <Welcome />
            <RecipesList />
            <Catigories />
            <AboutUs />
        </>
    );
}
