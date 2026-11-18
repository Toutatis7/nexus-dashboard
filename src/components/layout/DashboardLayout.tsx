
import { Outlet, useLocation } from 'react-router'

import Sidebar from './Sidebar'
import Header from './Header'

// Relacionamos cada dirección con el título de su página.
const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/usuarios': 'Usuarios',
  '/ventas': 'Ventas',
  '/analiticas': 'Analíticas',
  '/configuracion': 'Configuración',
  '/ayuda': 'Ayuda',
}

function DashboardLayout() {
  // Obtenemos la dirección actual del navegador.
  const location = useLocation()

  // Buscamos el título correspondiente a esa dirección.
  const title = pageTitles[location.pathname] ?? 'Dashboard'

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Navegación lateral permanente */}
      <Sidebar />

      {/* Zona principal */}
      <div className="min-w-0 flex-1">

        {/* Cabecera compartida */}
        <Header title={title} />

        {/* Aquí aparecerá cada página */}
        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout
