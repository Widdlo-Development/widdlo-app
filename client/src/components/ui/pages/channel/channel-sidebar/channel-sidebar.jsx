import style from "./channel-sidebar.module.css";
import AccordionWrapper from "../sidebar/accordion-wrapper/accordion-wrapper";
import React, {Fragment, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {api} from "../../../../../shared/utils/token/api.js";

export default function ChannelSidebar(props) {

    const { id } = useParams();

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        api('GET', `channel/${id}`).then(res => {
            setData(res.channel);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                <AccordionWrapper title="Inicio" content={
                    <Fragment>
                        <Link to={`/channel/${id}`}><button className="section"><i className="fa-light fa-house" />Destacado</button></Link>
                        <Link to={`/channel/${id}/feed/latest`}><button className="section"><i className="fa-light fa-clock-two-thirty" />Reciente</button></Link>
                        <Link to={`/channel/${id}/feed/older`}><button className="section"><i className="fa-light fa-arrow-rotate-left" />Antiguo</button></Link>
                        <Link to={`/channel/${id}/feed/popular`}><button className="section"><i className="fa-light fa-arrow-trend-up" />Más visto</button></Link>
                    </Fragment>
                } />
                <AccordionWrapper title="Chat" content={
                    <Fragment>
                        {
                            data.chats.map((chat, key) =>
                                <Link key={key} to={"/channel/" + id + "/" + chat.id}>
                                    <button className="section uppercased"><i className="fa-light fa-message" />{chat.name}</button>
                                </Link>
                            )
                        }
                    </Fragment>
                } />
                <AccordionWrapper title="Comunidad" content={
                    <Fragment>
                        <button className="section"><i className="fa-light fa-book-blank" />Publicaciones</button>
                    </Fragment>
                } />
            </div>
        );
    }
}