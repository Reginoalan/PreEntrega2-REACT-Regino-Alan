import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import ItemListConteiner from "./pages/ItemListConteiner";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import ItemDetailConteiner from "./pages/ItemDetailConteiner";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Layout/>}>
          <Route index element= {<Home/>}/>
          <Route path="productos" element={<ItemListConteiner/>}/>
          <Route path="productos/:productoId" element={<ItemDetailConteiner/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
