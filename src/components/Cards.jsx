import card_css from "./Cards.module.css";

export default function Card({ titulo, imagem, precoOriginal, precoDesconto, categoria, emPromocao }) {
  return (

    <div className={card_css.card}>
      {emPromocao && <span className={card_css.badge}>Promoção</span>}
      
      <div className={card_css.containerImagem}>
        <img src={imagem} alt={titulo} className={card_css.imagem} />
      </div>

      <div className={card_css.conteudo}>
        <span className={card_css.categoria}>{categoria}</span>
        <h3 className={card_css.tituloJogo}>{titulo}</h3>
        
        <div className={card_css.precos}>
          {emPromocao ? (
            <>
              <span className={card_css.precoAntigo}>R$ {precoOriginal.toFixed(2)}</span>
              <span className={card_css.precoAtual}>R$ {precoDesconto.toFixed(2)}</span>
            </>
          ) : (
            <span className={card_css.precoAtual}>R$ {precoOriginal.toFixed(2)}</span>
          )}
        </div>

        <button className={card_css.detalhes}>Ver Detalhes</button>
      </div>
    </div>
  );
}