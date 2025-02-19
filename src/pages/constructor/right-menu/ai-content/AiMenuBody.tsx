import SideContentMenuBody from "../../left-menu/side-content-menu-body/SideContentMenuBody.tsx";
import SettingsCodeInput from "../../../../shared/components/settings/SettingsCodeInput.tsx";
import {useState} from "react";
import useNeuroChat from "../../../../features/ai/useNeuroChat.ts";
import MenuButton from "../../../../shared/ui/menu-button-link/MenuButton.tsx";
import style from "./aiMenuBody.module.css";

const AiMenuBody = () => {
    const [request, setRequest] = useState("");
    const {response, status, sendRequest} = useNeuroChat();

    return (
        <SideContentMenuBody>
            <SettingsCodeInput value={request} label={"Запрос для бота"} onChange={setRequest} inputStyle={{height: "200px"}} disabled={status === "thinking"}/>
            <div className={style.control}>
                <MenuButton onClick={() => sendRequest(request)} disabled={status === "thinking"} style={{paddingTop: "10px", paddingBottom: "10px"}}>
                    {"Отправить"}
                </MenuButton>
                <div className={style.status + " " + style[status]}>{status}</div>
            </div>
            {response && <div className={style.response + " scrollbar_transparent"}>
                {response}
            </div>}
        </SideContentMenuBody>
    );
};

export default AiMenuBody;
