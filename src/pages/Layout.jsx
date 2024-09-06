import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


function Layout(){

    return(
        <div>
            <header>
                <h1>Venta de Cartas - TCG Pokemon</h1>
            </header>            
            <NavBar/>
            <Outlet/>
            
        </div>
    )
}

export default Layout;