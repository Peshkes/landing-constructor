import GroupCard from "../../right-panel/offer-card/GroupCard.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import PanelEmptyGenerator from "../../generator/PanelEmptyGenerator.tsx";

const GroupAccessesGenerator = () => {
    const groupAccesses = useGroupsPanel(state => state.groupAccesses);
    const isLoading = useGroupsPanel(state => state.groupIsLoading);

    return (
        <PanelEmptyGenerator isLoading={isLoading} dataArray={groupAccesses} emptyMessage={"Нет групп"}>
            {groupAccesses.map(item =>
                <GroupCard group_id={item.group_id} image={item.image} key={item.group_id}
                           name={item.name} role={item.role}/>
            )}
        </PanelEmptyGenerator>
    )
}
export default GroupAccessesGenerator
