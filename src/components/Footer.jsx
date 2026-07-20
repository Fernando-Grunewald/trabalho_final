import footer_css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footer_css.footer}>
      <div className={footer_css.container}>
        

        <div className={footer_css.coluna}>
          <h3 className={footer_css.tituloMarca}>Axalotl Games</h3>
          <p className={footer_css.descricao}>
           Saudações jogadores! Explore as melhores franquias, 
            remakes, promoções e a maior comunidade que você poderia imaginar.
          </p>
          <span className={footer_css.autor}>C.E.O: @₿yF&rn★ndø</span>
        </div>


        <div className={footer_css.coluna}>
          <h4 className={footer_css.subtitulo}>Navegação</h4>
          <ul className={footer_css.lista}>
            <li><a href="#novidades" className={footer_css.link}>Novidades</a></li>
            <li><a href="#recomendados" className={footer_css.link}>Recomendados</a></li>
            <li><a href="#promocoes" className={footer_css.link}>Promoções</a></li>
            <li><a href="#suporte" className={footer_css.link}>Suporte</a></li>
          </ul>
        </div>

        <div className={footer_css.coluna}>
          <h4 className={footer_css.subtitulo}>Contatos</h4>
          <ul className={footer_css.listaContatos}>
            <li><span className={footer_css.label}>WhatsApp:</span> +55 51 99321-2332</li>
            <li><span className={footer_css.label}>E-mail:</span> fegrunevald@gmail.com</li>
            <li><a href="#ajuda" className={footer_css.linkAjuda}>Central de Ajuda...</a></li>
          </ul>
        </div>

      </div>

      <div className={footer_css.faixaInferior}>
        <p>&copy; 2026 Axalotl Games. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}