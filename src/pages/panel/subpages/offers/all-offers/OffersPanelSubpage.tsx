import HeaderPanel from "../../../right-panel/header-panel/HeaderPanel.tsx";
import Search from "../../../right-panel/header-panel/search/Search.tsx";
import Filtres from "../../../right-panel/header-panel/filtres/Filtres.tsx";
import {Sorting} from "../../../right-panel/header-panel/filtres/Sorting.tsx";
import OffersRoleFilter from "./OffersRoleFilter.tsx";
import OffersGallery from "./OffersGallery.tsx";
import OffersStatusFilter from "./OffersStatusFilter.tsx";
import useModal from "../../../../../shared/components/modal/useModal.tsx";
import useOffersPanel from "../../../../../features/panel/offers/useOffersPanel.ts";
import {useEffect} from "react";
import AddOfferForm from "../add-offer/AddOfferForm.tsx";

const OffersPanelSubpage = () => {
    const fetchOffers = useOffersPanel((state) => state.fetchOffers);
    const {openModal, Modal, isOpen, closeModal} = useModal();

    useEffect(fetchOffers, [fetchOffers]);

    return (
        <div className={"page box-sizing"}>
            <HeaderPanel name={"Офферы"} onClick={openModal}>
                <Search/>
            </HeaderPanel>
            <Filtres
                filtres={<>
                    <OffersRoleFilter/>
                    <OffersStatusFilter/>
                </>}
                sorting={<Sorting/>}
            />
            <OffersGallery/>
            {isOpen && <Modal>
                <AddOfferForm fetch={fetchOffers} closeModal={closeModal}/>
            </Modal>}
        </div>
    )
}
export default OffersPanelSubpage
