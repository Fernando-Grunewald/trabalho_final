import Cards from "./Cards";
import shop_css from "./Shop.module.css";

export default function Shop() {
    return (

        <main className={shop_css.conteudo_main}>

            <div className={shop_css.div_sections}>

            <section className={shop_css.secoes}>
                <h2 className={shop_css.secao_titulo}>Preferências</h2>
                <div className={shop_css.opcoes}>
                    <dl>
                        <dt>Filtrar</dt>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Um jogador </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Multiplayer </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Cooperativo </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Cooperativo Local</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Servidores Online</span>
                        </dd>

                        <dd>
                            <input type="checkbox"></input>
                            <span> Compatível com Controle </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Axolotl Deck </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Conteúdo Adulto </span>
                        </dd>
                            <dd>
                            <input type="checkbox"></input>
                            <span> VR </span>
                        </dd>

                    </dl>

                    <dl>
                        <dt>Gêneros</dt>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Hero-Shooter</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> FPS de Tiro </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Hack & Slash</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Arcade</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Casual </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Sobrevivência </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Romance </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Corrida </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Sandbox </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Simulação </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Combate em Turnos </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Comédia </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Mundo Aberto </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Souls-Like </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> RPG </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Puzzles e Enigmas</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> História</span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Esportes </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Mistério </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Vida e Imersão </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Espaço </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Cartas </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Fazenda </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Visual Novels </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Construção </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Plataforma </span>
                        </dd>

                        <dd>
                            <input type="checkbox"></input>
                            <span> Tower Defense </span>
                        </dd>
                        <dd>
                            <input type="checkbox"></input>
                            <span> Luta e Artes marciais </span>
                        </dd>
                    </dl>

                </div>

            </section>

            <section>
                <h2 className={shop_css.secao_titulo}>Recomendados</h2>
                <div className={shop_css.jogos}>

                    <Cards 
                        titulo="Hades"
                        imagem="/Hades.png" 
                        precoOriginal={73.99} 
                        precoDesconto={17.99} 
                        categoria="Hack&Slash | RPG | Mitologia" 
                        emPromocao={true} 
                    />

                    <Cards 
                        titulo="Slime Rancher" 
                        imagem="/Slime_Rancher_2.png"
                        precoOriginal={89.99} 
                        categoria="Fofo | Um Jogador | Casual" 
                        emPromocao={false} 
                    />

                    <Cards
                        titulo="R.E.P.O"
                        imagem="/REPO.png"
                        precoOriginal={24.99}
                        categoria="Terror | Coop | Comédia"
                        emPromocao={false}
                    />

                    <Cards
                        titulo="Palworld"
                        imagem="/Pals.png"
                        precoOriginal={85.99}
                        precoDesconto={59.99}
                        categoria="Mundo Aberto | RPG | Multiplayer"
                        emPromocao={true}
                    />

                    <Cards
                        titulo="Elden Ring"
                        imagem="/Elden.png"
                        precoOriginal={274.50}
                        categoria="Souls-Like | Difícil | Dark"
                        emPromocao={false}
                    />

                    <Cards
                        titulo="Terraria"
                        imagem="/Terraria.png"
                        precoOriginal={23.99}
                        categoria="Pixel | Sobrevivência | Sandbox"
                        emPromocao={false}
                    />

                    <Cards
                        titulo="Placeholder"
                        imagem=""
                        precoOriginal={10.99}
                        categoria="Pixel | Sobrevivência | Sandbox"
                        emPromocao={false}
                    />

                    <Cards
                        titulo="Placeholder"
                        imagem=""
                        precoOriginal={10.99}
                        categoria="Pixel | Sobrevivência | Sandbox"
                        emPromocao={false}
                    />
                    
                    <Cards
                        titulo="Placeholder"
                        imagem=""
                        precoOriginal={10.99}
                        categoria="Pixel | Sobrevivência | Sandbox"
                        emPromocao={false}
                    />


                </div>

            </section>
            
            </div>

        </main>
    )
}