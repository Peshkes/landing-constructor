import SideHeader from "../side-header/SideHeader.tsx";
import SideContentBody from "../side-content-body/SideContentBody.tsx";
import ItemsStructureGenerator from "./items-structure-generator/ItemsStructureGenerator.tsx";

const ItemsContent = () => {
    return (
        <div className={'h-100'}>
            <SideHeader text={"Проект"}/>
            <SideContentBody>
                <ItemsStructureGenerator/>
            </SideContentBody>
        </div>
    );
};

export default ItemsContent;
