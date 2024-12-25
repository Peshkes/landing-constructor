import './App.css'
import AppRouter from "./routes/AppRouter.tsx";
import {useEffect, useState} from "react";
import useModal from "../shared/components/modal/useModal.tsx";
import Loader from "../shared/components/loader/Loader.tsx";
import {AuthApi} from "../features/authentication/AuthApi.ts";

function App() {
    const [loading, setLoading] = useState(true);
    const {Modal, openMessage} = useModal();

    useEffect(() => {
        AuthApi.getCsrf().then((res) => {
                setLoading(!res);
                if (!res) openMessage(`Не удалось получить токен для подключения к серверу. Вероятно, сайт не работает`, 'error');
            }
        ).catch((error) => openMessage('Error:' + error, 'error'))
    }, [openMessage]);

    return (
        <div className={"app"}>
            <AppRouter/>
            {loading && <Loader backgroundBlur={true}/>}
            <Modal/>
        </div>
    )
}

export default App
