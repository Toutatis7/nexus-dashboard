
import { NavLink } from 'react-router'

import {
  Activity,
  LayoutDashboard,
  Users,
  ShoppingCart,
  ChartNoAxesCombined,
  Settings,
  CircleHelp,
  LogOut,
} from 'lucide-react'

// Definimos la estructura de cada elemento del menú.
// TypeScript comprobará que cada elemento tenga estos campos.
type MenuItem = {
  label: string
  path: string
  icon: typeof LayoutDashboard
}

// Elementos que aparecerán en la navegación.
const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    label: 'Usuarios',
    path: '/usuarios',
    icon: Users,
  },
  {
    label: 'Ventas',
    path: '/ventas',
    icon: ShoppingCart,
  },
  {
    label: 'Analíticas',
    path: '/analiticas',
    icon: ChartNoAxesCombined,
  },
]

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-950 text-slate-300">

      {/* Identidad de nuestra aplicación */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Activity size={23} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wide text-white">
            NEXUS
          </h1>
          <p className="text-xs text-slate-400">
            Business Analytics
          </p>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="flex-1 px-4 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Principal
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </div>

        {/* Sección de configuración */}
        <p className="mb-4 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Preferencias
        </p>

        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          <Settings size={19} />
          <span>Configuración</span>
        </NavLink>

        <NavLink
          to="/ayuda"
          className={({ isActive }) =>
            `mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
        >
          <CircleHelp size={19} />
          <span>Ayuda</span>
        </NavLink>

      </nav>

      {/* Información del usuario */}
      <div className="border-t border-slate-800 p-4">

        <div className="flex items-center gap-3 rounded-xl p-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-semibold text-white">
            VG
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Administrador
            </p>
            <p className="truncate text-xs text-slate-400">
              admin@nexus.com
            </p>
          </div>

          <LogOut size={18} className="text-slate-400" />

        </div>

      </div>

    </aside>
  )
}

export default Sidebar
