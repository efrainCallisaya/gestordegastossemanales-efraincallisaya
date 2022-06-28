import {useState} from 'react';
const useCount = (stock,inicial)=>{
    const [contador, setContador] = useState(parseInt(inicial));

    const funcionlogica = (valor)=>{
      const result = contador + valor;
      if( valor === 0 ){
        setContador(0)

      }else if(result <= stock && result >=  0){
        setContador(contador+valor)
      }
    }
    return{
        funcionlogica, contador
    }
}
export default useCount;
