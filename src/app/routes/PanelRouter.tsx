import {Route, Routes} from "react-router-dom";
import GroupPanelSubpage from "../../pages/panel/subpages/group/GroupPanelSubpage.tsx";
import ProfilePanelSubpage from "../../pages/panel/subpages/ProfilePanelSubpage.tsx";
import RecentOffersPanelSubpage from "../../pages/panel/subpages/recent-offers/RecentOffersPanelSubpage.tsx";
import OffersPanelSubpage from "../../pages/panel/subpages/offers/OffersPanelSubpage.tsx";

const PanelRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RecentOffersPanelSubpage/>}/>
            <Route path="/offers" element={<OffersPanelSubpage/>}/>
            <Route path="/groups" element={<GroupPanelSubpage/>}/>
            <Route path="/profile" element={<ProfilePanelSubpage/>}/>
            <Route path="*" element={<RecentOffersPanelSubpage/>}/>
        </Routes>
    );
};

export default PanelRouter;
