
import {
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react'

// Definimos las propiedades del componente.
type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="flex h-20 min-w-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">

      {/* Título de la página */}
      <div className="min-w-0 pl-12 md:pl-0">
        <h2 className="truncate text-lg font-bold text-slate-800 sm:text-xl">
          {title}
        </h2>

        <p className="hidden text-sm text-slate-500 sm:block">
          Bienvenido de nuevo a NEXUS
        </p>
      </div>

      {/* Zona derecha: búsqueda y perfil */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5 lg:gap-6">

        {/* Buscador */}
        <div className="relative hidden lg:block">
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
        <div className="relative shrink-0">
          <Bell size={21} className="text-slate-500" />

          <span
            aria-label="Tienes notificaciones pendientes"
            className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"
          />
        </div>

        {/* Perfil del usuario */}
        <div className="flex shrink-0 items-center gap-2 border-l border-slate-200 pl-3 sm:gap-3 sm:pl-5 lg:pl-6">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white sm:h-10 sm:w-10">
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



