import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => {
  return (
    <div className="card" style={{width: 300 + 'px'}}>
      <div className="card-content">
        <div className="content">
          <h2>Tu carrito de compras</h2>

          {carrito.length === 0 ? (
            <p>No hay elementos en el carrito</p>
          ) : (
            carrito.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
