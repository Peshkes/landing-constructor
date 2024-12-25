import useConstructor from "../../features/constructor/useConstructor.ts";
import OfferBlock from "../../shared/components/OfferBlock.tsx";
import styles from "./offerPage.module.css";

const OfferPage = () => {
    const {offer} = useConstructor();

    const pageStyle = {
        backgroundColor: offer?.settings?.backgroundColor,
        ...offer?.settings?.customPageCss,
    };

    const contentStyle = {
        ...offer?.settings?.customContentCss,
    };

    return (
        <div className={styles.page} style={pageStyle}>
            <div className={styles.content} style={contentStyle}>
                {offer && offer.body.map((item) => (
                    <OfferBlock key={item.id} offerBlock={item}/>
                ))}
            </div>
        </div>
    );
};

export default OfferPage;
