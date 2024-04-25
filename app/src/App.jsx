import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Perguntas from "./pages/Perguntas";
import Capacitacao from "./pages/Capacitacao";
import Legislacao from "./pages/Legislacao";
import EstruturaAdministrativa from "./pages/EstruturaAdministrativa";
import Login from "./pages/Login";
import Noticia from "./pages/Noticia";
import Evento from "./pages/Evento";
import Categoria from "./pages/Categoria";
function App(){
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/perguntas/:page?" element={<Perguntas />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/capacitacao/:dia?/:mes?/:ano?" element={<Capacitacao />} />
        <Route path="/legislacao" element={<Legislacao />} />
        <Route path="/estruturaAdministrativa" element={<EstruturaAdministrativa />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/noticia/:id" element={<Noticia />} />
        <Route exact path="/evento/:data?" element={<Evento />} />
        <Route exact path="/categoria/:id?/:page?" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  </div>)
}
 
export default App