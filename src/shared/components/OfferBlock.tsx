import {OfferBlock as OfferBlockType} from "../../features/constructor/types.ts";
import {findComponent} from "../functions.ts";
import React from "react";

const OfferBlock = ({offerBlock}: { offerBlock: OfferBlockType }) => {
    const component = findComponent(offerBlock.type, offerBlock.block_code);

    if (component)
        return React.createElement(component, offerBlock.settings);
    else
        return null;
}

export default OfferBlock
