
import { Link, useParams } from "react-router-dom";
import productos from "../data";

function Producto(){
    
    const { productoId } = useParams();

    const cartaFind = productos.find((producto)=> producto.id == productoId)

    const producto = cartaFind;

    return(
        <div>
            <h1>Detalle</h1>
            <h3>{producto.name}</h3>
            <h3>{producto.category}</h3>
            <img src={producto.images} alt={producto.name} />
            <h4>Precio: $ {producto.price}</h4>
        </div>

    )
}

export default Producto;