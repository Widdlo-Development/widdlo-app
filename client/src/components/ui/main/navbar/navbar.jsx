import SearchBar from "../../input/search-bar";
import AuthModal from "../account/modal/auth/auth-modal.jsx";

import style from "./navbar.module.css";

export default function Navbar() {

    return (
        <div className={style["navbar"]}>
            <a href="/" className="unselectable">Widdlo</a>
            <div className={style["search-bar-wrapper"]}>
                <SearchBar />
            </div>
            <div className={style["buttons-wrapper"]}>
                <button className="main">Ayuda</button>
                <button className="main">App</button>
                <AuthModal />
            </div>
        </div>
    );
}