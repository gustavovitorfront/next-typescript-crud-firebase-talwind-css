interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props:BotaoProps){
    const cor = props.cor ? `from-${props.cor}-400 to-${props.cor}-700` : 'from-gray-400 to-gray-700';

    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r ${cor}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}