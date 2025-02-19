import FilterBlock from "../../right-panel/header-panel/filtres/FilterBlock.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import {offerGroupRoles} from "../../../../features/panel/offers/types.ts";

const GroupRoleFilter = () => {
    const toggleItem = useGroupsPanel(state => state.toggleFilter);
    const activeFilters = useGroupsPanel(state => state.groupFilters);

    return <FilterBlock title={"Роли"} toggleItem={toggleItem} items={offerGroupRoles} activeItems={activeFilters}/>
}
export default GroupRoleFilter
