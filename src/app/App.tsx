import './App.css'
import AppRouter from "./routes/AppRouter.tsx";
// import UseAuthentication from "../features/authentication/useAuthentication.ts";
// import {useEffect, useState} from "react";
// import Loader from "../shared/components/loader/Loader.tsx";
// import useModal from "../shared/components/modal/useModal.tsx";

function App() {
    // const {getCsrf} = UseAuthentication();
    // const [loading, setLoading] = useState(true);
    // const {openModal, Modal, setMessage} = useModal();
    //
    // useEffect(() => {
    //     getCsrf().then(
    //         (res) => {
    //             setLoading(!res);
    //             if (!res) {
    //                 setMessage(`Не удалось получить токен для подключения к серверу. Вероятно, сайт не работает`, 'error');
    //                 openModal();
    //             }
    //         }
    //     ).catch((error) => {
    //         console.error('Error:' + error);
    //         openModal();
    //     })
    // }, []);

    return (
        <div className={"app"}>
            <AppRouter/>
            {/*{loading && <Loader backgroundBlur={true}/>}*/}
            {/*<Modal/>*/}
        </div>
    )
}

export default App
