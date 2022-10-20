import style from "./video-manager.module.css";
import {Link} from "react-router-dom";
import InlineVideoGrid from "../../../../../../videos/video-grid/inline-grid/inline-video-grid";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar.jsx";

export default function VideoManager() {

    return (
        <div className={style["wrapper"]}>
            <TipsSidebar sidebar={
                <div className="tip-wrapper">
                    <Link to="/studio/upload">
                        <button className="important full">Nuevo vídeo</button>
                    </Link>
                    <Link to="/studio/upload">
                        <button className="secondary full">Asesoría para creadores</button>
                    </Link>
                    <div className="tip-box">
                        <h1>¿Cómo gestionar mis vídeos?</h1>
                        <hr className="spaced" />
                        <p>Obtén consejos <a>aquí</a> sobre cómo mejorar la visibilidad de tu canal y su actividad.</p>
                    </div>
                </div>
            } content={
                <div>
                    <InlineVideoGrid />
                </div>
            } />
        </div>
    );
}