import FilterBlock from "../../../right-panel/header-panel/filtres/FilterBlock.tsx";
import {offerAllRoles} from "../../../../../features/panel/offers/types.ts";
import useOffersPanel from "../../../../../features/panel/offers/useOffersPanel.ts";

const OffersRoleFilter = () => {
    const toggleItem = useOffersPanel(state => state.toggleRoleFilter);
    const activeFilters = useOffersPanel(state => state.roleFilters);
    return <FilterBlock title={"Роли"} items={offerAllRoles} toggleItem={toggleItem} activeItems={activeFilters}/>;
}
export default OffersRoleFilter
