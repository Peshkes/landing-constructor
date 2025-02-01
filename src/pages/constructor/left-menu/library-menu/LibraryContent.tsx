import SideHeader from "../../side-header/SideHeader.tsx";
import SideContentBody from "../../side-content-body/SideContentBody.tsx";
import LibraryMenu from "./LibraryMenu.tsx";

const LibraryContent = () => {
    return (
        <div className={"h-100"}>
            <SideHeader text={"Библиотека блоков"}/>
            <SideContentBody>
                <LibraryMenu/>
            </SideContentBody>
        </div>
    );
};

export default LibraryContent;
