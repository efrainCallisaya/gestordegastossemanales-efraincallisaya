import useCount from "./useCount";
const ComponenetesII = ({ stock, inicial, onAdd }) => {
  const { funcionlogica, contador } = useCount(stock, inicial);
  console.log(stock, inicial);
  console.log(contador);
  const accionOnAdd = () => {
    onAdd();
  };
  return (
    <div className="p-3">
      <div className="text-center">
        <h5>Cantidad de su compra {contador}</h5>
      </div >
        <div className="d-flex justify-content-between">
          <button
            type=""
            className="btn btn-danger m-1 "
            onClick={() => funcionlogica(-1)}
          >
            -
          </button>
          <button
            type=""
            className="btn btn-primary m-1"
            onClick={() => funcionlogica(+1)}
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-center">
        <button type="" className="btn btn-success m-1" onClick={accionOnAdd}>
          agregar
        </button>
        </div>
        
    </div>
  );
};
export default ComponenetesII;
