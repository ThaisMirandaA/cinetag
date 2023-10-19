import Header from "components/Header";
import Container from "components/Container";
import FavoriteProvider from "context/Favorite";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const BasePage = () => {
    return (
        <>
            <Header />
            <Container>
                <FavoriteProvider>
                    <Outlet />
                </FavoriteProvider>
            </Container>
            <Footer />
        </>
    )
}

export default BasePage;