import { Link } from "react-router-dom";




function NavBar (){
    return (       
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">      
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to= "/" class="nav-link active" aria-current="page" >Home</Link>   
                </li>
                <li class="nav-item">
                    <Link to= "/productos" class="nav-link" >Productos</Link>   
                </li>
                </ul>
            </div>
            </div>
        </nav>

    );
};

export default NavBar;