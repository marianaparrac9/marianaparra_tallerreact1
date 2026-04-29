
import { productos } from "./data";
import ProductCard from "./components/ProductCard";

export default function App(){
  return (
    <div>
      <h1>catalogo mari</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10}}>
        {productos.map(p=>(
          <ProductCard key={p.id} producto={p}/>
        ))}
      </div>
    </div>
  )
}
