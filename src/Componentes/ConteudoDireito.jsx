import ConteudoDireitoSugestao from "./ConteudoDireitoSugestao";
import imgPerfil from "../img/gab.jpeg";
import imgPerfilGuilherme from "../img/alefe.jpg";
import imgPerfilLeticia from "../img/leri.jpg";
import imgPerfilPedro from "../img/pedroca.jpg";
import imgPerfilProa from "../img/proa.jpg";
import imgPerfilPichau from "../img/pichau.jpg";

export default function ConteudoDireito() {
    return (
        <div className='ConteudoDireito'>
            <div className="right-container">
                <div className="sub-container">
                    <ConteudoDireitoSugestao imagem={imgPerfil} usuario="gab.augustoz" nome="Gabriel Augusto" button="Mudar" />
                </div>

                <div className="d-flex info">
                    <div className="sugestion">
                        <span>Sugestões para você</span>
                    </div>
                    <div>
                        <span className="more">Ver tudo</span>
                    </div>
                </div>

                <div className="mt-3 for-you">
                    <ConteudoDireitoSugestao imagem={imgPerfilGuilherme} usuario="guilherme_alefe" nome="Guilherme" button="Seguir" />
                    <ConteudoDireitoSugestao imagem={imgPerfilLeticia} usuario="leh.majer" nome="Lust for Life" button="Seguir" />
                    <ConteudoDireitoSugestao imagem={imgPerfilPedro} usuario="junim_pedro" nome="Pedro Gustavo Junior" button="Seguir" />
                    <ConteudoDireitoSugestao imagem={imgPerfilProa} usuario="instituto.proa" nome="Instituto PROA" button="Seguir" />
                    <ConteudoDireitoSugestao imagem={imgPerfilPichau} usuario="pichauoficial" nome="Pichau" button="Seguir" />
                </div>

            </div>
            <div className="list">
                <ul className="list-info">
                    <a href="#" className="none"><li>Sobre</li></a><span></span>
                    <a href="#" className="none"><li>Ajuda</li></a><span></span>
                    <a href="#" className="none"><li>Imprensa</li></a><span></span>
                    <a href="#" className="none"><li>API</li></a><span></span>
                    <a href="#" className="none"><li>Carreiras</li></a><span></span>
                    <a href="#" className="none"><li>Privacidade</li></a><span></span>
                    <a href="#" className="none"><li>Termos</li></a><span></span>
                    <a href="#" className="none"><li>Localizações</li></a><span></span>
                    <a href="#" className="none"><li>Idioma</li></a><span></span>
                    <a href="#" className="none"><li>Meta Verified</li></a><span></span>
                </ul>
            </div>

        </div>
    )
}