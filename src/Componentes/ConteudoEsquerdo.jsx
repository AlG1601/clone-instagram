import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"
import { AiFillHome } from "react-icons/ai";
export default function ConteudoEsquerdo () {

    return (
    <div className="ConteudoEsquerdo">
        <div className="logo"></div>
        <div>
            <div className="menu">
                <ul>
                    <ItemMenuLateralEsquerda icone={<AiFillHome />} texto="Home" />
                    <ItemMenuLateralEsquerda icone="Lupa" texto="Busca" />
                    <ItemMenuLateralEsquerda icone="Caixa" texto="Explorar" />
                    <ItemMenuLateralEsquerda icone="Interoog" texto="Exemplo" />
                    <li>Menu</li>
                </ul>
            </div>
        </div>
    </div>
)
}
