import React,{useState} from 'react';

const Micomponente = ({cantcarrito}) => {

const [contador, setContador] = useState(0);
  
    const funcionlogica =(valor)=>{
      const result = contador + valor;
      if(contador<=result ){
        setContador(contador+valor)
      }
    }
      return(
            <>
          <div className="pt-5">     
                <h1>{contador}</h1>
                <h1>{cantcarrito}</h1>
          </div>
          <div className="">
                <button type="" className="btn btn-danger m-5" onClick={()=>funcionlogica(-1)}>Disminuir</button>
                <button type="" className="btn btn-primary m-5" onClick={()=>funcionlogica(+1)}>Incrementar</button>
          </div>
            </>
        /*
          <>
            <h1>{contador}</h1>
          <button onClick={handlerClick}>click me</button>
          </>
          */
    )
    
  }

  export default Micomponente