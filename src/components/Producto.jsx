
import './producto.css'

const Producto = ({ producto, carrito, agregarProducto, productos }) => {

    const { nombre, precio, id } = producto;

    // * Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            producto[0]
        ]);
    }

    //! Eliminar producto del carrito
    const eliminarProducto = id => {
        const producto = carrito.filter(producto => producto.id !== id);
        agregarProducto(producto)
    }

    return ( 
        <div className="card mb-5">
           <div className="card-content">
                <div className="content has-text-centered">
                    <h2 className="title is-4 has-text-black">{ nombre }</h2>
                    <p className="title is-5 has-text-info"> ${ precio }</p>
                { productos
                    ? (
                        <button className="button is-primary is-outlined is-fullwidth" 
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                        >Comprar</button>
                    )
                    : (
                        <button className="button is-danger is-outlined is-fullwidth" 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                        >Eliminar</button>
                    )
                }
                </div>
            </div>
        </div>
     );
}
 
export default Producto;