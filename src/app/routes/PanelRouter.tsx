import {Route, Routes} from "react-router-dom";
import RecentlyPanelSubpage from "../../pages/panel/subpages/RecentlyPanelSubpage.tsx";
import OffersPanelSubpage from "../../pages/panel/subpages/OffersPanelSubpage.tsx";
import GroupPanelSubpage from "../../pages/panel/subpages/group/GroupPanelSubpage.tsx";
import ProfilePanelSubpage from "../../pages/panel/subpages/ProfilePanelSubpage.tsx";

const PanelRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RecentlyPanelSubpage/>}/>
            <Route path="/offers" element={<OffersPanelSubpage/>}/>
            <Route path="/groups" element={<GroupPanelSubpage/>}/>
            <Route path="/profile" element={<ProfilePanelSubpage/>}/>
            <Route path="*" element={<RecentlyPanelSubpage/>}/>
        </Routes>
    );
};

export default PanelRouter;
