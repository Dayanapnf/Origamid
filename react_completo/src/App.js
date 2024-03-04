import './App.css';
import Atividade from './components/Atividade';
import Atividade01 from './components/Atividade01';
import Header from './components/Atividade02/Header';
import Home from './components/Atividade02/Home';
import AtvMap from './components/AtvMap';
import Produtos from './components/Atividade02/Produtos';

function App() {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <div>
      {/* <Atividade /> */}
      {/* <AtvMap /> */}
      {/* <Atividade01 /> */}
      <Header />
      <Component />
    </div>
  );
}

export default App;
