import React, { useState } from 'react';

const AtvMap = () => {
  const [frutas] = useState([
    { id: 1, nome: 'banana' },
    { id: 2, nome: 'maça' },
    { id: 3, nome: 'pêra' },
    { id: 4, nome: 'uva' },
  ]);
  return (
    <div>
      <ul>
        {frutas
          .filter(({ id }) => id >= 2)
          .map((fruit) => (
            <li key={fruit.id}>{fruit.nome}</li>
          ))}
      </ul>
    </div>
  );
};

export default AtvMap;
