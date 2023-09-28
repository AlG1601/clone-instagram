import reactLogo from './assets/react.svg'
import LateralEsquerda from './Componentes/LateralEsquerda'
import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'
import ConteudoCentral from './Componentes/ConteudoCentral'

export default function App() {

  return (
    <main>
      <ConteudoEsquerdo />
      <ConteudoCentral />
      {/* <div className='ConteudoCentral'>
        <div className='Stories'></div>
        <div>Conteúdo</div>
      </div> */}
      <div className='ConteudoDireito'>
        <p>Lateral Direita</p>
      </div>
    </main>
  )
}
