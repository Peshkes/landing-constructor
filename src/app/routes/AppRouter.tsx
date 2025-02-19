import {Navigate, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import AuthenticationPage from "../../pages/auth/AuthenticationPage.tsx";
import Loader from "../../shared/components/loader/Loader.tsx";
import useAuthentication from "../../features/authentication/useAuthentication.ts";
import Test from "./Test.tsx";

const PanelPage = React.lazy(() => import("../../pages/panel/PanelPage.tsx"));
const ConstructorPage = React.lazy(() => import("../../pages/constructor/ConstructorPage.tsx"));
const OfferPage = React.lazy(() => import("../../pages/offer/OfferPage.tsx"));
const ErrorPage = React.lazy(() => import("../../pages/error/ErrorPage.tsx"));

const ProtectedRoute = ({ isAuthenticated, element }: { isAuthenticated: boolean; element: React.JSX.Element }) => {
    return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

const RedirectIfAuthenticated = ({ isAuthenticated, element }: { isAuthenticated: boolean; element: React.JSX.Element }) => {
    return isAuthenticated ? <Navigate to="/panel" replace /> : element;
};

const AppRouter = () => {
    const {user} = useAuthentication();
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/auth" element={<RedirectIfAuthenticated isAuthenticated={!!user} element={<AuthenticationPage />} />}/>
                <Route path="/offer/:id" element={<OfferPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>

                <Route path="/panel/*" element={<ProtectedRoute isAuthenticated={!!user} element={<PanelPage/>} />}/>
                <Route path="/constructor/:id?" element={<ProtectedRoute isAuthenticated={!!user} element={<ConstructorPage />} />}/>

                <Route path="/test" element={<Test/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
