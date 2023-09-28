export default function ItemMenuLateralEsquerda (props) {
    return (
        <li>
            <span className="iconeSimples">{props.icone}</span>
            <span className="text">{props.texto}</span>
        </li>
    )
}