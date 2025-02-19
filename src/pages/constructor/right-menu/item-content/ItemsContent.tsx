import SideHeader from "../../side-header/SideHeader.tsx";
import SideContentBody from "../../side-content-body/SideContentBody.tsx";
import styles from './itemsContent.module.css';
import ItemsStructureGenerator from "./items-structure-generator/ItemsStructureGenerator.tsx";
import Trash from "./trash/Trash.tsx";

const ItemsContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Проект"}/>
            <SideContentBody>
                <div className={styles.body}>
                    <ItemsStructureGenerator/>
                    <Trash/>
                </div>
            </SideContentBody>
        </div>
    );
};

export default ItemsContent;
