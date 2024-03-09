import React, { useRef } from 'react';

const UseRef = () => {
  const video = useRef();

  return <div ref={video}>Teste</div>;
};

export default UseRef;
