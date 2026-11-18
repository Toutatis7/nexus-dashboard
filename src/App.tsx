
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router'

// Layout compartido
import DashboardLayout from './components/layout/DashboardLayout'

// Páginas
import Dashboard from './pages/Dashboard'
import Usuarios from './pages/Usuarios'
import Ventas from './pages/Ventas'
import Analiticas from './pages/Analiticas'
import Configuracion from './pages/Configuracion'
import Ayuda from './pages/Ayuda'

function App() {
  
  return (
    <BrowserRouter>

      <Routes>

        {/* Layout principal: permanece visible */}
        <Route element={<DashboardLayout />}>

          {/* Página inicial */}
          <Route path="/" element={<Dashboard />} />

          {/* Gestión de usuarios */}
          <Route path="/usuarios" element={<Usuarios />} />

          {/* Gestión de ventas */}
          <Route path="/ventas" element={<Ventas />} />

          {/* Analíticas del negocio */}
          <Route path="/analiticas" element={<Analiticas />} />

          {/* Configuración */}
          <Route path="/configuracion" element={<Configuracion />} />

          {/* Ayuda */}
          <Route path="/ayuda" element={<Ayuda />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App


