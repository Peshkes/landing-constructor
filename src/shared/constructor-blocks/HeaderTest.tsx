import {HeaderBlockSettings} from "../../features/constructor/types.ts";
import React from "react";

const HeaderTest: React.FC<HeaderBlockSettings> = ({title, image, backgroundColor, textColor}: HeaderBlockSettings) => {
    return (
        <div style={{backgroundColor, boxSizing: "border-box", padding: "20px"}}>
            <h1 style={{backgroundColor, color: textColor}}>{title}</h1>
            <img style={{width: "50%"}} src={image} alt={title}/>
        </div>
    );
};

export default HeaderTest;
