import header_css from "./Header.module.css";

export default function Header() {
  return (
    <header className={header_css.headerContainer}>
      <div className={header_css.quebra}>
        <img className={header_css.logo} src="favicon.ico"></img>
        <h1 className={header_css.titulo}>Axolotl Games</h1>

        <nav>
          <ul className={header_css.lista}>
            <li><a className={header_css.link} href="#novidades">Novidades</a></li>
            <li><a className={header_css.link} href="#recomendados">Recomendados</a></li>
            <li><a className={header_css.link} href="#promocoes">Promoções</a></li>
            <li><a className={header_css.link} href="#desejos">Lista de Desejos</a></li>
            <li><a className={header_css.link} href="#carrinho">Carrinho</a></li>
            <li><a className={header_css.link} href="#suporte">Suporte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}