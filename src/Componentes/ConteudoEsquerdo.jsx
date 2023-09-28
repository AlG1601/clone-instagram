import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"
import { AiFillHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineExplore } from "react-icons/md";
export default function ConteudoEsquerdo () {

    return (
    <div className="ConteudoEsquerdo">
        <div className="wrapLogo"></div>
        <div>
            <div className="menu">
                <ul>
                    <ItemMenuLateralEsquerda icone={<AiFillHome />} texto="Home" />
                    <ItemMenuLateralEsquerda icone={<HiMagnifyingGlass />} texto="Busca" />
                    <ItemMenuLateralEsquerda icone={<MdOutlineExplore />} texto="Explorar" />
                    <ItemMenuLateralEsquerda icone="Interoog" texto="Exemplo" />
                    <li>Menu</li>
                </ul>
            </div>
        </div>
    </div>
)
}
