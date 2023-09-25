import reactLogo from './assets/react.svg'
import LateralEsquerda from './Componentes/LateralEsquerda'
import './App.css'

export default function App() {

  return (
    <main>
      <LateralEsquerda />
      <div className='ConteudoCentral'>
        <div className='Stories'></div>
        <p>Conteúdo Central</p>
      </div>
      <div className='LateralDireita'>
        <p>Lateral Direita</p>
      </div>
    </main>
  )
}
