import GroupAccessesGenerator from "./GroupAccessesGenerator.tsx";
import PanelGallery from "../../right-panel/panel-gallery/PanelGallery.tsx";
import {useCallback, useEffect} from "react";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import useAuthentication from "../../../../features/authentication/useAuthentication.ts";

const GroupAccessesGallery = () => {
    const {groupIsLoading, groupsAreFull, incrementPage, fetchGroups} = useGroupsPanel((state) => state);
    const user_id = useAuthentication(state => state.user!._id);

    const handleScroll = useCallback((container: HTMLDivElement) => {
        if (!groupsAreFull) {
            const {scrollTop, scrollHeight, clientHeight} = container;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight - 250;
            if (isNearBottom && !groupIsLoading) {
                incrementPage(user_id);
            }
        }
    }, [groupIsLoading, groupsAreFull, incrementPage, user_id])

    useEffect(() => {
        fetchGroups(user_id, 0);
    }, []);

    return (
        <PanelGallery onScroll={handleScroll}>
            <GroupAccessesGenerator/>
        </PanelGallery>
    )
}
export default GroupAccessesGallery
