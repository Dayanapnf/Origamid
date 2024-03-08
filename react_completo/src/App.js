import './App.css';
import Atividade from './components/Atividade';
import Atividade01 from './components/Atividade01';
import Header from './components/Atividade02/Header';
import Home from './components/Atividade02/Home';
import AtvMap from './components/AtvMap';
import Produtos from './components/Atividade02/Produtos';
import Produto from './components/Atividade03/Produto';
import { useEffect, useState } from 'react';
import UseEfffect from './components/UseEfffect';

function App() {
  const { pathname } = window.location;
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handClick({ target }) {
    setProduto(target.innerText);
  }
  // async function handleClick(event) {
  //   setCarregando(true);
  //   const response = await fetch(
  //     `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
  //   );
  //   const json = await response.json();
  //   setDados(json);
  //   setCarregando(false);
  // }

  // let Component;
  // if (pathname === '/produtos') {
  //   Component = Produtos;
  // } else {
  //   Component = Home;
  // }
  return (
    <div>
      {/* <Atividade /> */}
      {/* <AtvMap /> */}
      {/* <Atividade01 /> */}
      {/* <Header /> */}
      {/* <Component /> */}
      {/* <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />} */}
      {/* <UseEfffect /> */}
      <h1>Preferência: {produto}</h1>
      <button onClick={handClick}>Notebook</button>
      <button onClick={handClick}>Smartphone</button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
