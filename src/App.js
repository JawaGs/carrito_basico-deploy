import './App.css';
import React, { useState } from 'react';

//Traemos el JSON que tiene los productos a mostrar
let data = require('./prouductos.json'); 
let data_carrito = [];

function App() {
  // Declaracion de variables de estado
  const [count, setCount] = useState(0); // Indica la cantidad de productos en el carrito
  
  // Funciones para agregar o quitar porductos del carrito
  function agregarProducto(i) {
    setCount(count+1);
    data_carrito.push(data.items[i]);
    data.items.splice( i,1 )
  };
  
  function quitarProducto(i) {
    setCount(count-1);
    data.items.push(data_carrito[i]);
    data_carrito.splice( i,1 );
    
  };
  
  // Estructura de los productos traidos del JSON 
  const productos =  data.items.length >0 ?data.items.map((item,i) =>
  <div className='item' key={i}>
    <ul>
      <li>Nombre: {item.nombre}</li>
      <li>Precio: {item.precio}</li>
    </ul>
    <button className='boton' onClick={() => agregarProducto(i) }>
        Agregar al carrito 
      </button>
  </div>
):<p>No hay productos para mostrar</p>;

 // Estructura de los porductos en el carrito
 const carrito = data_carrito.length > 0?data_carrito.map((item,i) =>
 <div className='item'  key={i}>
   <ul>
     <li>Nombre: {item.nombre}</li>
     <li>Precio: {item.precio}</li>
   </ul>
   <button className='boton' onClick={() => quitarProducto(i)}>
       Quitar del carrito
     </button>
 </div>
):<p>No tienes productos en tu carrito</p>;

  return (
    <div>
     <section className='container'>
       <div className="productos">{ productos }</div>
       <div className='carrito'>
         <p>Cantidad de productos en el carrito: { count }</p>
         { carrito }
        </div>
     </section>
    </div>
  );
}

export default App;
