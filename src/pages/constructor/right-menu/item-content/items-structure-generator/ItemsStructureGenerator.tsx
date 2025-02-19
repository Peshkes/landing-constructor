import useConstructor from "../../../../../features/constructor/useConstructor.ts";
import ItemsStructureBlock from "../items-structure-block/ItemsStructureBlock.tsx";
import style from "./itemsStructureGenerator.module.css";

const ItemsStructureGenerator = () => {
    const {offer} = useConstructor();

    return (
        <div className={offer && offer.body.length > 0 ? style.wrapper : style.empty}>
            {
                offer && offer.body.length > 0 ?
                    offer.body.map((block, index) => <ItemsStructureBlock key={block.id} block={block} index={index} />) :
                    <p>Нет блоков</p>
            }
        </div>
    );
};

export default ItemsStructureGenerator;
