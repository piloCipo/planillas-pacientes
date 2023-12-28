import './App.css';
import BuscarPaciente from './componentes/FormBuscarPaciente';
import CargarPaciente from './componentes/FormCargarPaciente';
import Ingresar from './componentes/Ingreso';
import ResponsiveAppBar from './componentes/PaginaUsuario';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DarseDeAlta from './componentes/Registro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CargarPatologias from './componentes/PatologiasCargar';

function App() {
  return (
    <div className="App">
      <CargarPatologias></CargarPatologias>
      <Router>
        {/* <Routes>
          
          <Route path='/' element={<Ingresar />} />
          <Route path='/componentes/Registro' element={<DarseDeAlta />} />
          <Route path='/componentes/PaginaUsuario' element={<ResponsiveAppBar />} />
          <Route path='/componentes/FormCargarPaciente' element={<> <CargarPaciente /> <ResponsiveAppBar /> </>} />
          <Route path='/componentes/FormBuscarPaciente' element={<> <BuscarPaciente /> <ResponsiveAppBar /> </>} />
        </Routes> */}
      </Router>
      <ToastContainer position='top-center'></ToastContainer>

    </div>
  );
}

export default App;

