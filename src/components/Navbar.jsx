import navbar_css from "./Navbar.module.css"

export default function Navbar() {

    return (
        <div className={navbar_css.container_nav}>
            <nav className={navbar_css.navbar}>
            <ul className={navbar_css.lista_links}>
                <li><a href="#recomendados">RECOMENDADOS</a></li>
                <li>
                    <form>
                        <label className={navbar_css.pesquisar} for="campo-busca">PROCURAR</label>
                        <input className={navbar_css.barra_pesquisa} type="search" placeholder="..."></input>
                        <button type="submit" className={navbar_css.buscar}>BUSCAR</button>
                    </form>
                </li>
                <li><a href="#categorias">CATEGORIAS</a></li>
                <li><a href="#opcoes">OPÇÕES</a></li>
                <li><a href="#oficina">OFICINA</a></li>
                <li><a href="#modo-familia">MODO FAMÍLIA</a></li>
                <li><a className={navbar_css.carteira} href="#carteira" >Carteira <span>(R$: 46.89)</span></a></li>
            </ul>
            </nav>
        </div>
    )
};