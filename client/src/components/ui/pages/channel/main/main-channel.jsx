import style from "./main-channel.module.css";
import VideoGrid from "../../../videos/video-grid/grid/video-grid.jsx";

export default function MainChannel() {

    return (
        <div className={style["header"]}>
            <img className={"undraggable unselectable"} src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
            <div className={style["container"]}>
                <div>
                    <p>Ailakks</p>
                    <p>0 seguidores</p>
                </div>
                <div className={style["buttons-wrapper"]}>
                    <button className="main">Seguir</button>
                    <button className="main">Apoyar</button>
                    <button className="main">Reportar</button>
                </div>
            </div>
            <div className={style["content"]}>
                <VideoGrid />
            </div>
        </div>
    );
}