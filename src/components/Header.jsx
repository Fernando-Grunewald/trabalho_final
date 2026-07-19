import header_css from "./Header.module.css"

export default function Header () {
    return (
        <header>

        <div className={header_css.quebra}>

        <h1 className={header_css.titulo}>Legendary Games</h1>

        <nav>
            <ul>
                <li><a href="">Novidades</a></li>
                <li><a href="">Recomendados</a></li>
                <li><a href="">Promoções</a></li>
                <li><a href="">Lista de Desejos</a></li>
                <li><a href="">Carrinho</a></li>
                <li><a href="">Suporte</a></li>
            </ul>
        </nav>

        </div>

        </header>
    )
}