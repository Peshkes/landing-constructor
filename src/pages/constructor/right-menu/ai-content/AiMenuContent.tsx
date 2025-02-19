import SideHeader from "../../side-header/SideHeader.tsx";
import AiMenuBody from "./AiMenuBody.tsx";

const AiMenuContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Нейросеть"}/>
            <AiMenuBody/>
        </div>
    );
};

export default AiMenuContent;
