import style from "./sideHeader.module.css";

const SideHeader = ({text}: {text: string}) => {
    return (
        <div className={style.block}>
            <p>{text}</p>
        </div>
    );
};

export default SideHeader;
