import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import AuthenticationPage from "../../pages/auth/AuthenticationPage.tsx";
import Loader from "../../shared/components/loader/Loader.tsx";

const LandingPage = React.lazy(() => import("../../pages/landing/LandingPage.tsx"));
const PanelPage = React.lazy(() => import("../../pages/panel/PanelPage.tsx"));
const ConstructorPage = React.lazy(() => import("../../pages/constructor/ConstructorPage.tsx"));
const OfferPage = React.lazy(() => import("../../pages/offer/OfferPage.tsx"));
const ErrorPage = React.lazy(() => import("../../pages/error/ErrorPage.tsx"));

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/auth" element={<AuthenticationPage/>}/>
                <Route path="/panel" element={<PanelPage/>}/>
                <Route path="/constructor/:id?" element={<ConstructorPage/>}/>
                <Route path="/offer/:id" element={<OfferPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
