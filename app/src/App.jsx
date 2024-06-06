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
import Pesquisar from "./pages/Pesquisar";
import Sair from "./pages/Sair";
import HomeAdmin from "./pages/admin/HomeAdmin";
import NoticiaAdmin from "./pages/admin/NoticiaAdmin";
import InsertNoticias from "./pages/admin/noticias/InsertNoticias";
import TableInsert from "./pages/admin/rffeditor/TableInsert";
import TableInsertConfigCell from "./pages/admin/rffeditor/TableInsertConfigCell";
import TableInsertConfigTable from "./pages/admin/rffeditor/TableInsertConfigTable";
import InsertImgDefault from "./pages/admin/rffeditor/InsertImgDefault";
import ImageList from "./pages/admin/rffeditor/ImageList";
import InsertVideo from "./pages/admin/rffeditor/InsertVideo";
import InsertLink from "./pages/admin/rffeditor/InsertLink";
import ColorFont from "./pages/admin/rffeditor/ColorFont";
import PasteContentWeb from "./pages/admin/rffeditor/PasteContentWeb";
import EfeitoTexto from "./pages/admin/rffeditor/EfeitoTexto";
import PerguntasAdmin from "./pages/admin/PerguntasAdmin";
import InsertPerg from "./pages/admin/perguntas/InsertPerg";
import EditNoticias from "./pages/admin/noticias/EditNoticias";
import DeleteNoticia from "./pages/admin/noticias/DeleteNoticia";
import EditPerg from "./pages/admin/perguntas/EditPerg";
import DeletePerg from "./pages/admin/perguntas/DeletePerg";
import AgendaAdmin from "./pages/admin/AgendaAdmin";
import InsertEvent from "./pages/admin/agenda/InsertEvent";
import EditEvent from "./pages/admin/agenda/EditEvent";
import CategoriaAdmin from "./pages/admin/CategoriaAdmin";
import InsertCategoria from "./pages/admin/categoria/InsertCategoria";
import EditCategoria from "./pages/admin/categoria/EditCategoria";
import DeleteCategoria from "./pages/admin/categoria/DeleteCategoria";
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
        <Route exact path="/pesquisar/:pesq?/:page?" element={<Pesquisar />} />
        <Route exact path="/sair" element={<Sair />} />
        <Route exact path="/admin/inicio" element={<HomeAdmin />} />
        <Route exact path="/admin/noticia/:page?" element={<NoticiaAdmin />} />
        <Route exact path="/admin/noticias/insert/" element={<InsertNoticias />} />
        <Route exact path="/admin/table/insert/" element={<TableInsert />} />
        <Route exact path="/admin/table/configCell/" element={<TableInsertConfigCell />} />
        <Route exact path="/admin/table/configTable/" element={<TableInsertConfigTable />} />
        <Route exact path="/admin/insertImg/" element={<InsertImgDefault />} />
        <Route exact path="/admin/img/" element={<ImageList />} />
        <Route exact path="/admin/video/" element={<InsertVideo />} />
        <Route exact path="/admin/link/" element={<InsertLink />} />
        <Route exact path="/admin/color/" element={<ColorFont />} />
        <Route exact path="/admin/colarDaWeb/" element={<PasteContentWeb />} />
        <Route exact path="/admin/efeitoTexto/aplicar/" element={<EfeitoTexto />} />
        <Route exact path="/admin/perguntasAdm/:page?" element={<PerguntasAdmin />} />
        <Route exact path="/admin/pergunta/insert/" element={<InsertPerg />} />
        <Route exact path="/admin/noticia/edit/:id" element={<EditNoticias />} />
        <Route exact path="/admin/noticia/delete/:id" element={<DeleteNoticia />} />
        <Route exact path="/admin/pergunta/edit/:id" element={<EditPerg />} />
        <Route exact path="/admin/pergunta/delete/:id" element={<DeletePerg />} />
        <Route exact path="/admin/agenda/:dia?/:mes?/:ano?" element={<AgendaAdmin />} />
        <Route exact path="/admin/agenda/insert/" element={<InsertEvent />} />
        <Route exact path="/admin/agenda/edit/:id?" element={<EditEvent />} />
        <Route exact path="/admin/categoria/:page?" element={<CategoriaAdmin />} />
        <Route exact path="/admin/categoria/insert/" element={<InsertCategoria />} />
        <Route exact path="/admin/categoria/edit/:id" element={<EditCategoria />} />
        <Route exact path="/admin/categoria/delete/:id" element={<DeleteCategoria />} />
      </Routes>
    </BrowserRouter>
  </div>)
}
 
export default App