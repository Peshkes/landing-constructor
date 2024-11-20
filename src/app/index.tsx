import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "../shared/components/error-boundary/ErrorBoundary.tsx";

createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ErrorBoundary>
);
