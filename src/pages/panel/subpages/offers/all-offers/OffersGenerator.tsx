import useOffersPanel from "../../../../../features/panel/offers/useOffersPanel.ts";
import PanelEmptyGenerator from "../../../generator/PanelEmptyGenerator.tsx";
import OfferCard from "../../../right-panel/offer-card/OfferCard.tsx";


const RecentOffersGenerator = () => {
    const offers = useOffersPanel(state => state.offerPreviews);
    const isLoading = useOffersPanel(state => state.offersAreLoading);

    return (
        <PanelEmptyGenerator isLoading={isLoading} dataArray={offers} emptyMessage={"Нет офферов"}>
            {offers.map(item =>
                <OfferCard key={item.id} {...item}/>
            )}
        </PanelEmptyGenerator>
    )
}
export default RecentOffersGenerator
