import OffersGenerator from "./OffersGenerator.tsx";
import PanelGallery from "../../../right-panel/panel-gallery/PanelGallery.tsx";

const OffersGallery = () => {
    return (
        <PanelGallery onScroll={()=>{}}>
            <OffersGenerator/>
        </PanelGallery>
    )
}
export default OffersGallery
