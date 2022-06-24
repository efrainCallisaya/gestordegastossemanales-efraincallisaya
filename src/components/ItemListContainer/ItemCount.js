import useCount from './useCount'
 const ComponenetesII = ({stock,inicial}) => {
  const {funcionlogica, contador} = useCount(stock,inicial)
      return(
        <div align="center"className="w-50 e-75 mt-5 ">
           <div className="pt-5">
                <h2> Stock Actual {contador}</h2>
                <h1>Cantidad de su compra {stock - contador}</h1>
          </div>
          <section className=" ">
            <div  className="">
                    <button type="" className="btn btn-danger mt-5" onClick={()=>funcionlogica(-1)}>Disminuir</button>
                    <button type="" className="btn btn-primary mt-5 ms-5" onClick={()=>funcionlogica(+1)}>Aumentar</button>
            </div>
            <button type="" className="btn btn-success mt-5 ms-5" onClick={()=>funcionlogica(0)}>Comprar</button>
          </section>
          </div> 
    )
  }
export default ComponenetesII;
