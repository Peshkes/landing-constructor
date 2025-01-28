import HeaderPanel from "../right-panel/header-panel/HeaderPanel.tsx";
import useGroupsPanel from "../../../features/panel/group/useGroupsPanel.ts";
import OfferCard from "../right-panel/offer-card/OfferCard.tsx";
import PanelGallery from "../right-panel/panel-gallery/PanelGallery.tsx";
import Filtres from "../right-panel/header-panel/filtres/Filtres.tsx";
import Search from "../right-panel/header-panel/search/Search.tsx";
import RoleFilterBlock from "../right-panel/header-panel/filtres/RoleFilterBlock.tsx";
import StatusFilterBlock from "../right-panel/header-panel/filtres/StatusFilterBlock.tsx";
import {Sorting} from "../right-panel/header-panel/filtres/Sorting.tsx";
import {useNavigate} from "react-router-dom";

const OffersPanelSubpage = () => {
    const {offerPreviews} = useGroupsPanel();
    const navigate = useNavigate()
    return (
        <div className={"page box-sizing"}>
            <HeaderPanel name={"Офферы"} onClick={()=> navigate("/constructor/sdasdasdasdasdasdasda")}>
                <Search/>
            </HeaderPanel>
            <Filtres
                filtres={<><RoleFilterBlock/><StatusFilterBlock/></>}
                sorting={<Sorting/>}
            />
            <PanelGallery>
                {offerPreviews.map(item => <OfferCard key={item.id} {...item}/>)}
            </PanelGallery>
        </div>
    )
}
export default OffersPanelSubpage
