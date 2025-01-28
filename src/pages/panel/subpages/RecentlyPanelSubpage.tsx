import HeaderPanel from "../right-panel/header-panel/HeaderPanel.tsx";
import OfferCard from "../right-panel/offer-card/OfferCard.tsx";
import PanelGallery from "../right-panel/panel-gallery/PanelGallery.tsx";
import useGroupsPanel from "../../../features/panel/group/useGroupsPanel.ts";

const RecentlyPanelSubpage = () => {
    const {offerPreviews} = useGroupsPanel();
    return (
        <div className={"page box-sizing"}>
            <HeaderPanel name={"Недавнее"}/>
            <PanelGallery>
                {offerPreviews.map(item => <OfferCard key={item.id} {...item}/>)}
            </PanelGallery>
        </div>
    )
}
export default RecentlyPanelSubpage
