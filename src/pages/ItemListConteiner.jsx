import { Link } from "react-router-dom";
import productos from "../data.js";

function Productos(){

    return(
        <div>
            <h1>Productos</h1>
            <div class="card row col-sm-3" >
                {productos.map((producto)=>{
                    return(
                        <article class="card-body" key={producto.id}>
                            <h3>{producto.name}</h3>
                            <img src={producto.images} alt="img" /><br />
                            <Link to={`${producto.id}`} class="btn btn-info">Detalles</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;