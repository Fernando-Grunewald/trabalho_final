
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
    
    <Header/>

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

    <Footer/>

    </>

  );
}

export default App;
