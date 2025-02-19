import FilterBlock from "../../../right-panel/header-panel/filtres/FilterBlock.tsx";
import useOffersPanel from "../../../../../features/panel/offers/useOffersPanel.ts";
import {offerStatuses} from "../../../../../features/panel/offers/types.ts";

const OffersStatusFilter = () => {
    const toggleItem = useOffersPanel(state => state.toggleStatusFilter);
    const activeFilters = useOffersPanel(state => state.statusFilters);
    return <FilterBlock title={"Статусы"} items={offerStatuses} toggleItem={toggleItem} activeItems={activeFilters}/>;
}
export default OffersStatusFilter
