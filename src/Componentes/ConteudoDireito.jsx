import imgPerfil from "../img/gab.jpeg";

export default function ConteudoDireito() {
    return (
        <div className='ConteudoDireito'>
            <div className="right-container">
                <div className="sub-container">
                    <div className="topo">
                        <div className="imgPerfilDireito">
                            <img src={imgPerfil} style={{ 'width': '44px', 'borderRadius': '28px' }} />
                        </div>
                        <div className="nameUsers">
                            <span className="id-user">gab.augustoz</span>
                            <span className="user">Gabriel Augusto</span>
                        </div>
                        <span className="change">Mudar</span>

                    </div>
                </div>

                <div className="d-flex info">
                    <div className="sugestion">
                        <span>Sugestões para você</span>
                    </div>
                    <div>
                        <span className="more">Ver tudo</span>
                    </div>

                </div>

            <div>
                <ul>
                    <li></li>
                </ul>
            </div>

            </div>
        </div>
    )
}