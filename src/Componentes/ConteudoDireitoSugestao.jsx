import imgPerfil from "../img/gab.jpeg";

export default function ConteudoDireitoSugestao() {
    return (
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
    )
}