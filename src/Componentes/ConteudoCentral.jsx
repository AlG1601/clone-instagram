export default function ConteudoCentral () {
    return (

        <div className="ConteudoCentral">
            <div className="Stories">
                <div className="ItemStories">
                    <div className="Borda">
                        <span>Foto</span>
                    </div>
                    <span>Nome</span>
                </div>
            </div>

            <div className="Timeline">
                <div className="Post">

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
                    
                </div>
                
            </div>
        </div>
    )
}