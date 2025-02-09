import GroupAccessesGenerator from "./GroupAccessesGenerator.tsx";
import {useEffect} from "react";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import useAuthentication from "../../../../features/authentication/useAuthentication.ts";
import PanelGallery from "../../right-panel/panel-gallery/PanelGallery.tsx";

const GroupAccessesGallery = () => {
    const {groupIsLoading, groupsAreFull, incrementPage, fetchGroups, groupPage} = useGroupsPanel((state) => state);
    const user_id = useAuthentication(state => state.user!._id);

    const handleScroll = (container: HTMLDivElement) => {
        console.log(groupIsLoading, groupsAreFull, groupPage);
        if (!groupsAreFull && !groupIsLoading) {
            const {scrollTop, scrollHeight, clientHeight} = container;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight - 250;
            if (isNearBottom && !groupIsLoading) {
                incrementPage(user_id);
            }
        }
    };

    useEffect(() => {
        fetchGroups(user_id, 0);
    }, [fetchGroups, user_id]);

    return (
        <PanelGallery onScroll={handleScroll}>
            <GroupAccessesGenerator/>
        </PanelGallery>
    )
}
export default GroupAccessesGallery
