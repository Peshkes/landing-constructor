import style from './workZone.module.css';
import {useDrop} from "react-dnd";
import useConstructor from "../../../features/constructor/useConstructor.ts";
import BlockOfWorkZone from "./block-of-workzone/BlockOfWorkZone.tsx";
import {createOfferBlock} from "../../../shared/functions.ts";
import {DraggableComponentData} from "../../../features/constructor/types.ts";
import {draggableTypes} from "../../../features/constructor/constructorSettings.ts";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import {useRef, useState} from "react";
import useConstructorSettings from "../../../features/constructor/useConstructorSettings.ts";

enum resolutionWidth {
    MOBILE = 415,
    TABLET = 900,
    DESKTOP = 1400
}

const WorkZone = () => {
    const {offer, addBlock} = useConstructor();
    const padding = useConstructorSettings(state => state.workzonePadding);
    const [resolution, setResolution] = useState(resolutionWidth.DESKTOP);

    const [, drop] = useDrop({
        accept: draggableTypes.CONSTRUCTION_BLOCKS,
        drop: (data: DraggableComponentData) => {
            addBlock(null, createOfferBlock(data));
        },
    });

    const transformRef = useRef<any>(null);

    return (
        <div className={style.workzone} style={{padding: `${padding}px`}}>
            <TransformWrapper
                ref={transformRef}
                initialScale={1}
                minScale={0.5}
                maxScale={1}
                wheel={{step: 0.1, disabled: true}}
                panning={{disabled: true}}
            >
                {({zoomIn, zoomOut, resetTransform}) => (
                    <div className={style.wrapper}>
                        <div>
                            <TransformComponent>
                                <div style={{width: `${resolution}px`}}>
                                    {offer && offer.body.map((item, index) => (
                                        <BlockOfWorkZone key={item.id} offerBlock={item} index={index}/>
                                    ))}
                                    <div ref={drop} className={style.addZone}>+</div>
                                </div>
                            </TransformComponent>
                            <div className={style.zoomControls}>
                                <button onClick={() => zoomIn(0.1)}>+</button>
                                <button onClick={() => zoomOut(0.1)}>−</button>
                                <button onClick={() => resetTransform()}>о</button>
                            </div>
                        </div>
                    </div>
                )}
            </TransformWrapper>
            <div className={style.resolutions}>
                <button className={resolution === resolutionWidth.MOBILE ? style.active : ''}
                        onClick={() => setResolution(resolutionWidth.MOBILE)}>S
                </button>
                <button className={resolution === resolutionWidth.TABLET ? style.active : ''}
                        onClick={() => setResolution(resolutionWidth.TABLET)}>M
                </button>
                <button className={resolution === resolutionWidth.DESKTOP ? style.active : ''}
                        onClick={() => setResolution(resolutionWidth.DESKTOP)}>L
                </button>
            </div>
        </div>
    )
        ;
};

export default WorkZone;
