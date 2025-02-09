import GroupAccessesGenerator from "./GroupAccessesGenerator.tsx";
import {useEffect} from "react";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import useAuthentication from "../../../../features/authentication/useAuthentication.ts";
import PanelGallery from "../../right-panel/panel-gallery/PanelGallery.tsx";

const GroupAccessesGallery = () => {
    const {groupIsLoading, groupsAreFull, incrementPage, resetPageAndFetch} = useGroupsPanel((state) => state);
    const user_id = useAuthentication(state => state.user!._id);

    const handleScroll = (container: HTMLDivElement) => {
        if (!groupsAreFull && !groupIsLoading) {
            const {scrollTop, scrollHeight, clientHeight} = container;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight - 250;
            if (isNearBottom && !groupIsLoading) {
                incrementPage(user_id);
            }
        }
    };

    useEffect(() => {
        resetPageAndFetch(user_id);
    }, [resetPageAndFetch, user_id]);

    return (
        <PanelGallery onScroll={handleScroll}>
            <GroupAccessesGenerator/>
        </PanelGallery>
    )
}
export default GroupAccessesGallery
