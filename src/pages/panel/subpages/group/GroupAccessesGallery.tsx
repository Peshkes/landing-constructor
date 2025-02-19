import GroupAccessesGenerator from "./GroupAccessesGenerator.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import PanelGallery from "../../right-panel/panel-gallery/PanelGallery.tsx";
import {createHandleScroll} from "../../../../shared/functions.ts";

const GroupAccessesGallery = () => {
    const {groupIsLoading, groupsAreFull, incrementPage} = useGroupsPanel((state) => state);

    const handleScroll = createHandleScroll(groupIsLoading, groupsAreFull, incrementPage);


    return (
        <PanelGallery onScroll={handleScroll}>
            <GroupAccessesGenerator/>
        </PanelGallery>
    )
}
export default GroupAccessesGallery
