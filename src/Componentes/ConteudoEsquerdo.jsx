import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"
import { AiFillHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineExplore, MdWidthNormal } from "react-icons/md";
import { BiBorderAll, BiMoviePlay } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import imgPerfil from "../img/gab.jpeg";
import logo from "../img/logo-ins.png";

var icons = {'font-size': "24px"};
var prlogo = {'width': '133px', 'margin': '4px, 0px', 'padding': '12px'}
export default function ConteudoEsquerdo () {

    return (
    <div className="ConteudoEsquerdo">
        <div className="wrapLogo"></div>
        <div>
            <div className="menu">
                <ul>
                    <ItemMenuLateralEsquerda icone={<img src={logo} style={prlogo}  />} />
                    <ItemMenuLateralEsquerda icone={<AiFillHome style={icons} />} texto="Página inicial" />
                    <ItemMenuLateralEsquerda icone={<HiMagnifyingGlass style={icons} />} texto="Pesquisar" />
                    <ItemMenuLateralEsquerda icone={<MdOutlineExplore style={icons} />} texto="Explorar" />
                    <ItemMenuLateralEsquerda icone={<BiMoviePlay style={icons} />} texto="Reels" />
                    <ItemMenuLateralEsquerda icone={<TbSend style={icons} />} texto="Mensagens" />
                    <ItemMenuLateralEsquerda icone={<FaRegHeart style={icons} />} texto="Notificações" />
                    <ItemMenuLateralEsquerda icone={<CgAddR style={icons} />} texto="Criar" />
                    <ItemMenuLateralEsquerda icone={<img src={imgPerfil} style={{'width': "24px", 'borderRadius': '12px'}} />} texto="Perfil" />
                </ul>
            </div>
        </div>
    </div>
)
}
