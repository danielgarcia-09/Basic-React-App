
import { Fragment } from 'react';
import './producto.css'

const Producto = ({ producto, carrito, agregarProducto, productos }) => {

    const { nombre, precio, id, cantidad } = producto;

    // * Agregar producto al carrito
    const seleccionarProducto = id => {
        
        const p = carrito.find(producto => producto.id === id);

        if( p !== undefined ){           
            p.cantidad += 1;
            agregarProducto([
                ...carrito
            ]);
        
        }else {

            const producto = productos.filter(producto => producto.id === id);
            agregarProducto([
                ...carrito,
                producto[0]
            ]);
        }
    }

    //! Eliminar producto del carrito
    const eliminarProducto = id => {

        const deletedProducto = carrito.find(producto => producto.id === id);
        deletedProducto.cantidad = 1;
        
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos)
    }

    return ( 
        <div className="card mb-5 mx-auto">
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
                        <Fragment>
                        <p className="title is-6 has-text-primary"> Cantidad: {cantidad} </p>
                        <button className="button is-danger is-outlined is-fullwidth" 
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                        >Eliminar</button>
                        </Fragment>
                    )
                }
                </div>
            </div>
        </div>
     );
}
 
export default Producto;