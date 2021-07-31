import React, { Fragment, useState } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import 'bulma/css/bulma.css'

function App() {

  //* Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50, cantidad: 1 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40, cantidad: 1 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30, cantidad: 1 },
    { id: 4, nombre: 'Camisa Angular', precio: 20, cantidad: 1 },
  ]);

  //? State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);


  // * Obtener la fecha actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <section className="hero is-primary is-fullheight">
          <Header 
            titulo='Tienda Virtual'
            numero={ 20 }
          />
        <div className="container is-widescreen is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center mt-6">
          
          <div style={{width: 300 + 'px'}}>
            <h1 className="has-text-centered title is-4">Lista de Productos</h1>
            <div>
              {productos.map(producto => (
                <Producto
                  key={ producto.id }  
                  producto={ producto }
                  productos={ productos }
                  carrito={ carrito }
                  agregarProducto={ agregarProducto }
                />
              ))}
            </div>
          </div>
          

          <Carrito 
            carrito={ carrito }
            agregarProducto={ agregarProducto }
          />

          

        </div>
          <Footer 
            fecha={ fecha }
          />
      </section>
    </Fragment>
  )
}

export default App;
 