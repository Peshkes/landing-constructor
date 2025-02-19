import HeaderPanel from "../../../right-panel/header-panel/HeaderPanel.tsx";
import RecentOffersGallery from "./RecentOffersGallery.tsx";
import useModal from "../../../../../shared/components/modal/useModal.tsx";
import useRecentOffersPanel from "../../../../../features/panel/offers/useRecentOffersPanel.ts";
import {useEffect} from "react";
import AddOfferForm from "../add-offer/AddOfferForm.tsx";


const RecentOffersPanelSubpage = () => {
    const fetchOffers = useRecentOffersPanel((state) => state.fetchOffers);
    const {openModal, Modal, isOpen, closeModal} = useModal();

    useEffect(fetchOffers, [fetchOffers]);

    return (
        <div className={"page box-sizing"}>
            <HeaderPanel name={"Недавнее"} onClick={openModal}/>
            <RecentOffersGallery/>
            {isOpen && <Modal>
                <AddOfferForm fetch={fetchOffers} closeModal={closeModal}/>
            </Modal>}
        </div>
    )
}
export default RecentOffersPanelSubpage
