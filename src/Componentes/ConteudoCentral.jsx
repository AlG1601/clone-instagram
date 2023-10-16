import CardCentral from "./CardCentral";
import ConteudoCentralStories from "./ConteudoCentralStories";

export default function ConteudoCentral() {
    return (

        <div className="ConteudoCentral">
            <div className="d-flex flex-column centro">
                <div className="Item-stories" style={{ 'margin-bottom': '48px', 'width': '33vw', 'display':'flex' }}>
                    <ConteudoCentralStories />

                </div>

                <div className="container-timeline">
                    <div className="Timeline" style={{ 'width': '468px' }}>
                        <CardCentral />
                        <CardCentral />
                    </div>
                </div>

            </div>
        </div>
    )
}