import RightMenu from "./right-menu/RightMenu.tsx";
import LeftMenu from "./left-menu/LeftMenu.tsx";
import WorkZone from "./work-zone/WorkZone.tsx";
import TopMenu from "./top-menu/TopMenu.tsx";
import style from "./ConstructorPage.module.css";

const ConstructorPage = () => {
    return (
        <div className={"page"}>
            <TopMenu/>
            <div className={style.page}>
                <LeftMenu/>
                <WorkZone/>
                <RightMenu/>
            </div>
        </div>
    );
};

export default ConstructorPage;
