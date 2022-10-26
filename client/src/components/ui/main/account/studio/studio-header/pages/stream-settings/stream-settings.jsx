import style from "./stream-settings.module.css";
import TipsSidebar from "../../../components/tips-sidebar/tips-sidebar";
import {Button, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {useState} from "react";

export default function StreamSettings() {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className={style["wrapper"]}>
            <TipsSidebar sidebar={
                <div className="tip-wrapper">
                    <div className="tip-box">
                        <h1>¿Cómo gestionar mis vídeos?</h1>
                        <hr className="spaced" />
                        <p>Obtén consejos <a>aquí</a> sobre cómo mejorar la visibilidad de tu canal y su actividad.</p>
                    </div>
                </div>
            } content={
                <div>
                    <p>Comienza una retransmisión en directo e impresiona al público. Comparte con ellos momentos únicos con interacción en tiempo real.</p>
                    <h1>Clave de retransmisión</h1>
                    <p>IMPORTANTE: No la compartas con nadie en quien no confíes, cualquiera con esta clave podrá comenzar a retransmitir en tu canal.</p>
                    <InputGroup size='md'>
                        <Input disabled={true} type={show ? 'text' : 'password'} value={"a"} />
                        <InputRightElement>
                            <button className="tool" onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
                        </InputRightElement>
                    </InputGroup>
                </div>
            } />
        </div>
    );
}