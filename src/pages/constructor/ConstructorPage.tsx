import RightMenu from "./right-menu/RightMenu.tsx";
import LeftMenu from "./left-menu/LeftMenu.tsx";
import WorkZone from "./work-zone/WorkZone.tsx";
import TopMenu from "./top-menu/TopMenu.tsx";
import style from "./ConstructorPage.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const ConstructorPage = () => {
    return (
        <div className={"page"}>
            <TopMenu/>
            <div className={style.page}>
                <DndProvider backend={HTML5Backend}>
                    <LeftMenu/>
                    <WorkZone/>
                    <RightMenu/>
                </DndProvider>
            </div>
        </div>
    );
};

export default ConstructorPage;
