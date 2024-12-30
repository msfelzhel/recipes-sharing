import "./app.css";
import AboutUs from "./components/mainpage/about-us";
import Catigories from "./components/mainpage/catigories";
import Header from "./components/mainpage/header";
import RecipesList from "./components/mainpage/recipes-list";
import Welcome from "./components/mainpage/welcome";
import {TrpcProvider} from "./lib/trpc";

export function App() {
    return (
        <>
            <TrpcProvider>
                <Header />
                <Welcome />
                <RecipesList />
                <Catigories />
                <AboutUs />
            </TrpcProvider>
        </>
    );
}
