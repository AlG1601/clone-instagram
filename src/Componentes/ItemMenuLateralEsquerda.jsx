export default function ItemMenuLateralEsquerda (props) {
    return (
        <li>
            <span className="iconeSimples">{props.icone}</span>
            <span>{props.texto}</span>
        </li>
    )
}