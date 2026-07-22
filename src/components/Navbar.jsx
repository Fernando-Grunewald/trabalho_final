import navbar_css from "./Navbar.module.css"

export default function Navbar() {

    return (
        <div className={navbar_css.container_nav}>
            <nav className={navbar_css.navbar}>
            <ul className={navbar_css.lista_links}>
                <li><a href="#novidades">RECOMENDADOS</a></li>
                <li>
                    <label className={navbar_css.pesquisar}for="campo-busca">PROCURAR</label>
                    <input type="search" placeholder="..."></input>
                    <button type="submit">Buscar</button>
                </li>
                <li><a href="#novidades">Novidades</a></li>
                <li><a href="#novidades">Novidades</a></li>
                <li><a href="#novidades">Novidades</a></li>
                <li><a href="#modo-familia">Modo Família</a></li>
                <li><a href="#carteira">Carteira <span>(R$: 46.89)</span></a></li>
            </ul>
            </nav>
        </div>
    )
};