
import { useState } from "react";

export default function ProductCard({ producto }: any) {
  const [agregado, setAgregado] = useState(false);
  const [verResenas, setVerResenas] = useState(false);

  return (
    <div style={{border:"1px solid #ccc", padding:10}}>
      <img src={producto.imagen} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>

      <button 
        disabled={agregado}
        onClick={()=>setAgregado(true)}>
        {agregado ? "Agregado ✅" : "Agregar al carrito"}
      </button>

      <button onClick={()=>setVerResenas(!verResenas)}>
        {verResenas ? "Ocultar reseñas" : "Ver reseñas"}
      </button>

      {verResenas && (
        <ul>
          {producto.reseñas.length === 0 && <li>Sin reseñas</li>}
          {producto.reseñas.map((r:any,i:number)=>(
            <li key={i}>{r.usuario}: {r.texto}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
