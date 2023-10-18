import CardCentral from "./CardCentral";
import ConteudoCentralStories from "./ConteudoCentralStories";
import post1 from "../img/meme-mala.jpg"
import post2 from "../img/post2.png"
import post3 from "../img/post3.png"
import post4 from "../img/post4.png"
import postbancopan from "../img/postbancopan.png"
import postpichau from "../img/postpichau.png"
import imgPerfil from "../img/gab.jpeg";
import imgPerfilGuilherme from "../img/alefe.jpg";
import imgPerfilLeticia from "../img/leri.jpg";
import imgPerfilPedro from "../img/pedroca.jpg";
import imgPerfilProa from "../img/proa.jpg";
import imgPerfilPichau from "../img/pichau.jpg";
import imgPerfilVinicius from "../img/vinicius.jpg";
import imgPerfilVetor from "../img/zoio.jpg";
import imgBancoPan from "../img/bancopan.jpg";
import imgBancoItau from "../img/itau.jpg";
import imgBancoSantander from "../img/santander.jpg";


export default function ConteudoCentral() {
    return (

        <div className="ConteudoCentral">
            <div className="d-flex flex-column centro">
                <div className="Item-stories" style={{ 'margin-bottom': '48px', 'width': '33vw', 'display':'flex', 'margin-right': '5px' }}>
                    <ConteudoCentralStories imagem={imgPerfilProa} position="32.7" nome="institut..." />
                    <ConteudoCentralStories imagem={imgPerfilPedro} position="32" nome="junim_p..." />
                    <ConteudoCentralStories imagem={imgPerfilPichau} position="32.7" nome="pichauof..." />
                    <ConteudoCentralStories imagem={imgPerfilVetor} position="32" nome="zzoio_" />
                    <ConteudoCentralStories imagem={imgBancoPan} position="32.7" nome="bancopan" />
                    <ConteudoCentralStories imagem={imgBancoItau} position="31.8" nome="itau" />
                    <ConteudoCentralStories imagem={imgBancoSantander} position="32.7" nome="santande..." />
                    <ConteudoCentralStories imagem={imgPerfilLeticia} position="32" nome="leh.majer" />
                </div>

                <div className="container-timeline">
                    <div className="Timeline" style={{ 'width': '468px' }}>
                    <CardCentral imagem={post2} imagemperfil={imgPerfilProa} nome="instituto.proa" tempo="2 h" descricao="👩🏼‍🏫👨🏽‍🏫💙 Neste Dia do Professor, queremos homenagear todos os professores lembrando de alguns tipos que marcam a nossa história.

                    🫂🥰 Quantos desses já passaram por sua vida e qual deles você mais sente falta?" comentarios="89" />
                    <CardCentral imagem={postbancopan} imagemperfil={imgBancoPan} nome="bancopan" tempo="1 d" descricao="Quanto mais você usa seu cartão PAN, mais vantagens você tem!

                    Ganhe 50% de desconto no seu ingresso e de mais um acompanhante, nas principais redes de cinema e até 50% no combo mega de pipoca.

                    Tudo para você curtir mais filmes e ter mais memórias compartilhadas com quem você gosta.
                    " comentarios="679" />
                    <CardCentral imagem={post4} imagemperfil={imgPerfilVinicius} nome="viniciusssapucaia" tempo="9 h" descricao="Um dia para ser lembrado" comentarios="17" />
                    <CardCentral imagem={postpichau} imagemperfil={imgPerfilPichau} nome="pichauoficial" tempo="2 d" descricao="Transforme seu setup com estética e qualidade com os produtos da Azza!

                    Com fontes potentes, gabinetes elegantes e excelentes watercoolers, a Azza tem tudo que você procura para adicionar desempenho, segurança e sofisticação em seu setup. 😎🫶" comentarios="119" />
                    <CardCentral imagem={post3} imagemperfil={imgPerfilVetor} nome="zzoio_" tempo="3 m" descricao="ta suja mas eu amo ❤️🚲" comentarios="981" />
                    </div>
                </div>

            </div>
        </div>
    )
}