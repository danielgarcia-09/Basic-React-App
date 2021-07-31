import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => {

  const total = carrito.reduce((a,b) => a + (b.cantidad * b.precio), 0);

  return (
    <div className="card" style={{width: 340 + 'px'}}>
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
          
          <hr />

          <h3 style={{
            position: 'absolute',
            bottom: 0 + 'px',
            right: 20 + 'px'
          }}>Total: { total }</h3>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
