import { useState } from "react";
const useCount = (stock) => {
  const [contador, setContador] = useState(parseInt(1));

  const funcionlogica = (valor) => {
    const result = contador + valor;

 if (result <= stock && result >= 0 && result!==0) {
      setContador(contador + valor);
    }
  };
  return {
    funcionlogica,
    contador,
  };
};
export default useCount;
