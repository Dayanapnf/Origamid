const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
const Atividade01 = () => {
  return (
    <div>
      {produtos
        .filter(({ preco }) => Number(preco.replace('R$ ', '')) >= 2000)
        .map((prod) => (
          <div key={prod.id}>
            <h1>{prod.nome}</h1>
            <p>Preço: {prod.preco}</p>
            <ul>
              {prod.cores.map((cor, index) => (
                <li key={index} style={{ backgroundColor: cor }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Atividade01;
