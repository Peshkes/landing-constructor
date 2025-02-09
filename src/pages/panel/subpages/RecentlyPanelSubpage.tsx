import HeaderPanel from "../right-panel/header-panel/HeaderPanel.tsx";
import OfferCard from "../right-panel/offer-card/OfferCard.tsx";
import PanelGallery from "../right-panel/panel-gallery/PanelGallery.tsx";
import useOfferPanel from "../../../features/panel/offer/useOfferPanel.ts";

const RecentlyPanelSubpage = () => {
    const {offerPreviews} = useOfferPanel();
    return (
        <div className={"page box-sizing"}>
            <HeaderPanel name={"Недавнее"} onClick={()=>{}}/>
            <PanelGallery onScroll={()=>{}}>
                {offerPreviews.map(item => <OfferCard key={item.id} {...item}/>)}
            </PanelGallery>
        </div>
    )
}
export default RecentlyPanelSubpage
