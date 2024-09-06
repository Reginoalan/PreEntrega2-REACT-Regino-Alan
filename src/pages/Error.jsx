import { Link } from "react-router-dom";

function Error(){

    return(
        <div>
            <h1>404</h1>
            <p>La pagina no existe</p>
            <Link to ="/">Home</Link>
        </div>
    )
}

export default Error;