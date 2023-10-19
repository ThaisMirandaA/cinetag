import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "pages/BasePage";
import Home from "pages/Home";
import Favorite from "pages/Favorite";
import Player from "pages/Player";
import NotFound from "pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favorite />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;