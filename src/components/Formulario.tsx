import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (<Entrada texto="Código" className="mb-4" somenteLeitura valor={id} tipo="text" />) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
                tipo="text" />

            <Entrada
                texto="Idade"
                valor={idade}
                className="mb-4"
                valorMudou={setIdade}
                tipo="number" />

            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2"
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ?'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}