import reactLogo from './assets/react.svg'
import LateralEsquerda from './Componentes/LateralEsquerda'
import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'

export default function App() {

  return (
    <main>
      <ConteudoEsquerdo />
      <div className='ConteudoCentral'>
        <div className='Stories'></div>
        <h1>Conteúdo</h1>
      </div>
      <div className='LateralDireita'>
        <p>Lateral Direita</p>
      </div>
    </main>
  )
}
