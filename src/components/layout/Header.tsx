
import {
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react'

// Definimos las propiedades del componente.
// Esto permite reutilizar Header en diferentes páginas.
type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Título de la página */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="text-sm text-slate-500">
          Bienvenido de nuevo a NEXUS
        </p>
      </div>

      {/* Zona derecha: búsqueda y perfil */}
      <div className="flex items-center gap-6">

        {/* Buscador */}
        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            aria-label="Buscar"
            placeholder="Buscar..."
            className="w-64 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

        </div>

        {/* Notificaciones */}
        <div className="relative">
          <Bell size={21} className="text-slate-500" />

          <span
            aria-label="Tienes notificaciones pendientes"
            className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"
          />
        </div>

        {/* Perfil del usuario */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            VG
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Administrador
            </p>

            <p className="text-xs text-slate-500">
              Administrador general
            </p>
          </div>

          <ChevronDown
            size={17}
            className="hidden text-slate-400 sm:block"
          />

        </div>

      </div>

    </header>
  )
}

export default Header

