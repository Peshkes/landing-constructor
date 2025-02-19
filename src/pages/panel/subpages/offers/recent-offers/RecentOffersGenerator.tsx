import PanelEmptyGenerator from "../../../generator/PanelEmptyGenerator.tsx";
import useRecentOffersPanel from "../../../../../features/panel/offers/useRecentOffersPanel.ts";
import OfferCard from "../../../right-panel/offer-card/OfferCard.tsx";

const RecentOffersGenerator = () => {
    const offers = useRecentOffersPanel(state => state.offerPreviews);
    const isLoading = useRecentOffersPanel(state => state.offersAreLoading);

    return (
        <PanelEmptyGenerator isLoading={isLoading} dataArray={offers} emptyMessage={"Нет офферов"}>
            {offers.map(item =>
                <OfferCard key={item.id} {...item}/>
            )}
        </PanelEmptyGenerator>
    )
}
export default RecentOffersGenerator
