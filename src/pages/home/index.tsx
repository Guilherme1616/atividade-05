import { Link } from "react-router-dom" //npm run dev

export default function Home() {
    return (
        <>
            <div>
                <p>Bem vindo</p>
                <hr/>
                <p>projeto html</p>
                <hr />
            </div>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </>
    )
}