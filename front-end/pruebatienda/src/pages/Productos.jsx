import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import '../assets/css/Productos.css';

export function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProductos();
      setProductos(res.data.data[0]);
    }
    loadProductos();
  }, []);

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div key={producto.idproductos} className="producto-card">
          <h3>{producto.nombre_producto}</h3>
          <p>{producto.descripcion_producto}</p>
          <p className="precio">${producto.precio_producto}</p>
        </div>
      ))}
    </div>
  );
}
