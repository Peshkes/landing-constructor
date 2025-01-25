import './App.css'
import AppRouter from "./routes/AppRouter.tsx";
import {useEffect, useState} from "react";
import useModal from "../shared/components/modal/useModal.tsx";
import Loader from "../shared/components/loader/Loader.tsx";
import {AuthApi} from "../features/authentication/AuthApi.ts";
import useAuthentication from "../features/authentication/useAuthentication.ts";

function App() {
    const softLogin = useAuthentication(state => state.softLogin);
    const [loading, setLoading] = useState(true);
    const {Modal, openMessage} = useModal();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await AuthApi.getCsrf();
                setLoading(!res);
                if (!res) openMessage(`Не удалось получить токен для подключения к серверу. Вероятно, сайт не работает`, 'error');
            } catch (error) {
                openMessage('Error:' + error, 'error');
            }

            const lastReload = localStorage.getItem('lastRefresh');
            if (lastReload && new Date(lastReload) > new Date(new Date().getTime() - 19 * 60 * 1000)) await softLogin();
        };

        fetchData();
    }, [openMessage, softLogin]);

    return (
        <div className={"app"}>
            <AppRouter/>
            {loading && <Loader backgroundBlur={true}/>}
            <Modal/>
        </div>
    )
}

export default App
