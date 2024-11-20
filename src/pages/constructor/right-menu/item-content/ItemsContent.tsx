import SideHeader from "../../side-header/SideHeader.tsx";
import SideContentBody from "../../side-content-body/SideContentBody.tsx";
import ItemsStructureGenerator from "../items-structure-generator/ItemsStructureGenerator.tsx";
import Trash from "../trash/Trash.tsx";
import styles from './itemsContent.module.css';

const ItemsContent = () => {
    return (
        <div className={styles.block}>
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
