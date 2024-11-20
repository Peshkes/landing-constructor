import style from './workZone.module.css';
import {useDrop} from "react-dnd";
import useConstructor from "../../../features/constructor/useConstructor.ts";
import BlockOfWorkZone from "./block-of-workzone/BlockOfWorkZone.tsx";
import {createOfferBlock} from "../../../shared/functions.ts";
import {DraggableComponentData} from "../../../features/constructor/types.ts";
import {draggableTypes} from "../../../features/constructor/constructorSettings.ts";

const WorkZone = () => {
    const {offer, addBlock} = useConstructor();
    const [, drop] = useDrop({
        accept: draggableTypes.CONSTRUCTION_BLOCKS,
        drop: (data: DraggableComponentData) => {
            addBlock(null, createOfferBlock(data));
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div className={style.workzone} >
            {offer && offer.body.map((item, index) => (
                <BlockOfWorkZone key={item.id} offerBlock={item} index={index}/>
            ))}
            <div ref={drop} className={style.addZone}>+</div>
        </div>
    );
};

export default WorkZone;
