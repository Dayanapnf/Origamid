import React, { useEffect, useState } from 'react';

const UseEfffect = () => {
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log('Executou');
  });
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default UseEfffect;
