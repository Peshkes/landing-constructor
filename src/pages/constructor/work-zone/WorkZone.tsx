import style from './workZone.module.css';
import {useDrop} from "react-dnd";
import {draggableTypes} from "../../../features/constructor/constants.ts";
import useConstructor from "../../../features/constructor/useConstructor.ts";
import BlockOfWorkZone from "./BlockOfWorkZone.tsx";
import {createOfferBlock} from "../../../shared/functions.ts";
import {DraggableComponentData} from "../../../features/constructor/types.ts";

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
