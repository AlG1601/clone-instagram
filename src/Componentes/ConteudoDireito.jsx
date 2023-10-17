import ConteudoDireitoSugestao from "./ConteudoDireitoSugestao";

export default function ConteudoDireito() {
    return (
        <div className='ConteudoDireito'>
            <div className="right-container">
                <div className="sub-container">
                    <ConteudoDireitoSugestao />
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
                    <ConteudoDireitoSugestao />
                    <ConteudoDireitoSugestao />
                    <ConteudoDireitoSugestao />
                    <ConteudoDireitoSugestao />
                </div>

            </div>
        </div>
    )
}