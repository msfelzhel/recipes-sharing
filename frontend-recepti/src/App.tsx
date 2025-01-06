import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import AboutUs from "./components/mainpage/about-us";
import Header from "./components/mainpage/header";
import {TrpcProvider} from "./lib/trpc";
import { MainPage } from "./pages/MainPage";
import RecipesList from "./components/mainpage/recipes-list";
import { GetMainPage, getRecipe, viewRecipeRouteParams } from "./lib/routes";

export function App() {
    return (
        <>
            <TrpcProvider>
                <Header />
                <BrowserRouter>
                <Routes>
                    <Route path={GetMainPage()} element={<MainPage />} />
                    <Route path={getRecipe(viewRecipeRouteParams)} element={<RecipesList />} />
                </Routes>
                </BrowserRouter>
                <AboutUs />
            </TrpcProvider>
        </>
    );
}
