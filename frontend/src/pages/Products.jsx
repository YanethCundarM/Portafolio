import React from 'react';
import '../style/productos.css'

// Ejemplo de datos de productos con imagen
const productos = [
  { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'url_imagen_1' },
  { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'url_imagen_2' },
  { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'url_imagen_3' },
  { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', imagen: 'url_imagen_4' },
  { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', imagen: 'url_imagen_5' },
  { id: 6, nombre: 'Producto 6', descripcion: 'Descripción del Producto 6', imagen: 'url_imagen_6' },
  { id: 7, nombre: 'Producto 7', descripcion: 'Descripción del Producto 7', imagen: 'url_imagen_7' },
  { id: 8, nombre: 'Producto 8', descripcion: 'Descripción del Producto 8', imagen: 'url_imagen_8' },
];

function Products() {
  return (
    <div>
      <h1>Bienvenido a la Página de Productos</h1>
      <div className="productos-container">
        {productos.map(producto => (
          <div key={producto.id} className="tarjeta">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
