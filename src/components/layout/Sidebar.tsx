
import { useState } from 'react'
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
  Menu,
  X,
} from 'lucide-react'

// Definimos la estructura de cada elemento del menú.
type MenuItem = {
  label: string
  path: string
  icon: typeof LayoutDashboard
}

// Elementos de la navegación principal.
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
  // Controlamos si el menú móvil está abierto o cerrado.
  const [isOpen, setIsOpen] = useState(false)

  // Estilos compartidos para los enlaces de navegación.
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`

  // Contenido de la navegación.
  const navigationContent = (
    <nav className="flex-1 overflow-y-auto px-4 py-6">
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
              onClick={() => setIsOpen(false)}
              className={linkStyles}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </div>

      <p className="mb-4 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Preferencias
      </p>

      <NavLink
        to="/configuracion"
        onClick={() => setIsOpen(false)}
        className={linkStyles}
      >
        <Settings size={19} />
        <span>Configuración</span>
      </NavLink>

      <NavLink
        to="/ayuda"
        onClick={() => setIsOpen(false)}
        className={`mt-2 ${linkStyles({ isActive: false })}`}
      >
        <CircleHelp size={19} />
        <span>Ayuda</span>
      </NavLink>
    </nav>
  )

  // Identidad de nuestra aplicación.
  const sidebarHeader = (
    <div className="flex h-20 shrink-0 items-center gap-3 border-b border-slate-800 px-6">
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
  )

  // Información del usuario.
  const sidebarFooter = (
    <div className="shrink-0 border-t border-slate-800 p-4">
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
  )

  return (
    <>
      {/* Botón hamburguesa: solamente visible en móviles. */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shadow-lg md:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Fondo oscuro que permite cerrar el menú al pulsarlo. */}
      {isOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar para escritorio. */}
      <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-slate-950 text-slate-300 md:flex">
        {sidebarHeader}
        {navigationContent}
        {sidebarFooter}
      </aside>

      {/* Sidebar desplegable para móviles. */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex min-h-screen w-64 flex-col bg-slate-950 text-slate-300 shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarHeader}
        {navigationContent}
        {sidebarFooter}
      </aside>
    </>
  )
}

export default Sidebar
