import {Route, Routes} from "react-router-dom";
import LandingPage from "../../pages/landing/LandingPage.tsx";
import PanelPage from "../../pages/panel/PanelPage.tsx";
import ConstructorPage from "../../pages/constructor/ConstructorPage.tsx";
import OfferPage from "../../pages/offer/OfferPage.tsx";
import ErrorPage from "../../pages/error/ErrorPage.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/panel" element={<PanelPage/>}/>
            <Route path="/constructor:id?" element={<ConstructorPage/>}/>
            <Route path="/offer:id" element={<OfferPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;
