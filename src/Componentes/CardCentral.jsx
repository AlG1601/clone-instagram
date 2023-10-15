import { FaRegHeart } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { LiaBookmark } from "react-icons/lia"
import comment from "../../public/comment.png"
import imgPerfil from "../img/gab.jpeg";
import BtnPost from "./BtnPost";


export default function CardCentral() {
    return (
        <article className="borda-inferior">



            <div className="card border-0" style={{ 'width': '468px' }}>
                <div className="card-header border-0 bg-transparent" style={{ 'padding': '8px 0 8px 0', 'position': 'relative' }}>
                    <div style={{ 'position': 'absolute', 'width': '100%', 'height': '100%', 'top': '0', 'left': '0', 'borderRadius': '50%', 'border': '2.5px solid transparent' }}>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <g transform="rotate(5, 50, 50)">
                                <circle cx="19.7" cy="24.7" r="19.4" stroke="url(#gradiente)" strokeWidth="2" fill="transparent" />
                            </g>
                            <defs>
                                <linearGradient id="gradiente" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="20%" stopColor="#FFC500" />
                                    <stop offset="80%" stopColor="#D300C5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="imgPerfil"><img src={imgPerfil} style={{ 'width': '32px', 'borderRadius': '18px' }} /></span>
                    <span className="user">Gabriel Augusto</span>
                    <span> • 2 h</span>
                </div>

                <div className="image">
                    <img src="/src/img/meme-mala.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body" style={{ 'padding': '0' }}>

                    <div className="botoes d-flex">
                        <div className="shape-icons d-flex">
                            <BtnPost icone={<FaRegHeart />} />
                            <BtnPost icone={<img src={comment} className="post-icon" />} />
                            <BtnPost icone={<TbSend />} />
                        </div>
                        <div className="shape-icons d-flex justify-content-end">
                            <BtnPost icone={<LiaBookmark style={{ 'font-size': '35px' }} />} />
                        </div>
                    </div>

                    <div className="curtidas">
                        <p>Curtido por <span className="user">Guilherme</span> e <span className="user other-like">Outras pessoas</span></p>
                    </div>

                    <p className="card-text"><span>Gabriel Augusto</span> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <div className="comentarios">
                        <span>Comentários 1</span>
                        <span>Comentários 2</span>
                        <span>Comentários 3</span>
                        <span>Comentários 4</span>
                        <span>Comentários 5</span>
                    </div>

                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            {/* <div className="Post">

                <div className="headerPost">
                    <span>imagem do usuario</span>
                    <span>nome do usuário</span>
                    <span>data postagem</span>
                </div>

                <div className="content">
                    <span>imagem do post</span>
                </div>

                <div className="botoes">
                    <span>btn curtir</span>
                    <span>btn comentar</span>
                    <span>btn compartilhar</span>
                    <span>btn salvar</span>
                </div>

                <div className="curtidas">
                    <span>curtidas</span>
                </div>

                <div className="comentarios">
                    <span>Comentários 1</span>
                    <span>Comentários 2</span>
                    <span>Comentários 3</span>
                    <span>Comentários 4</span>
                    <span>Comentários 5</span>
                </div>


            </div> */}

        </article>
    )
}