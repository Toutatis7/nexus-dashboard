
import { useState } from 'react'
import { Users, UserCheck, UserX } from 'lucide-react'

// Definimos los posibles roles.
type UserRole = 'Administrador' | 'Editor' | 'Usuario'

// Definimos los posibles estados.
type UserStatus = 'Activo' | 'Inactivo'

// Estructura de cada usuario.
type User = {
  id: number
  name: string
  email: string
  role: UserRole
  status: UserStatus
}

// Datos ficticios de nuestra aplicación.
const users: User[] = [
  {
    id: 1,
    name: 'María García',
    email: 'maria@nexus.com',
    role: 'Administrador',
    status: 'Activo',
  },
  {
    id: 2,
    name: 'Carlos López',
    email: 'carlos@nexus.com',
    role: 'Editor',
    status: 'Activo',
  },
  {
    id: 3,
    name: 'Laura Martín',
    email: 'laura@nexus.com',
    role: 'Usuario',
    status: 'Inactivo',
  },
  {
    id: 4,
    name: 'Javier Sánchez',
    email: 'javier@nexus.com',
    role: 'Editor',
    status: 'Activo',
  },
  {
    id: 5,
    name: 'Ana Rodríguez',
    email: 'ana@nexus.com',
    role: 'Usuario',
    status: 'Activo',
  },
  {
    id: 6,
    name: 'Pedro Fernández',
    email: 'pedro@nexus.com',
    role: 'Usuario',
    status: 'Inactivo',
  },
]

// Componente principal.
function Usuarios() {
  // Estado del buscador.
  const [searchTerm, setSearchTerm] = useState('')

  // Estado seleccionado para filtrar por actividad.
  const [statusFilter, setStatusFilter] = useState('Todos')

  // Rol seleccionado para filtrar usuarios.
  const [roleFilter, setRoleFilter] = useState('Todos')

  // Número de usuarios que mostraremos en cada página.
  const usersPerPage = 5

  // Página actual del listado.
  const [currentPage, setCurrentPage] = useState(1)

  // Calculamos los indicadores.
  const totalUsers = users.length

  const activeUsers = users.filter(
    (user) => user.status === 'Activo'
  ).length

  const inactiveUsers = users.filter(
    (user) => user.status === 'Inactivo'
  ).length

  // Aplicamos simultáneamente búsqueda, estado y rol.
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase()

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)

    const matchesStatus =
      statusFilter === 'Todos' || user.status === statusFilter

    const matchesRole =
      roleFilter === 'Todos' || user.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })

  // Calculamos cuántas páginas necesitamos.
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  // Calculamos el índice del primer usuario de la página actual.
  const startIndex = (currentPage - 1) * usersPerPage

  // Obtenemos los usuarios correspondientes a esta página.
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  )

  return (
    <section>
      {/* Cabecera */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Gestión de usuarios
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Administra los usuarios, sus roles y sus estados.
        </p>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Total usuarios
            </p>
            <Users className="text-blue-600" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {totalUsers}
          </h2>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Usuarios activos
            </p>
            <UserCheck className="text-emerald-600" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {activeUsers}
          </h2>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Usuarios inactivos
            </p>
            <UserX className="text-red-500" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {inactiveUsers}
          </h2>
        </article>
      </div>

      {/* Buscador y filtros */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label
          htmlFor="search-users"
          className="mb-3 block text-sm font-semibold text-slate-700"
        >
          Buscar usuarios
        </label>

        <input
          id="search-users"
          type="search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value)
            setCurrentPage(1)
          }}
          placeholder="Buscar por nombre o correo electrónico..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        {/* Filtros */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Filtro por estado */}
          <div>
            <label
              htmlFor="status-filter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Filtrar por estado
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value)
                setCurrentPage(1)
              }}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Todos">Todos los estados</option>
              <option value="Activo">Activos</option>
              <option value="Inactivo">Inactivos</option>
            </select>
          </div>

          {/* Filtro por rol */}
          <div>
            <label
              htmlFor="role-filter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Filtrar por rol
            </label>

            <select
              id="role-filter"
              value={roleFilter}
              onChange={(event) => {
                setRoleFilter(event.target.value)
                setCurrentPage(1)
              }}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Todos">Todos los roles</option>
              <option value="Administrador">Administrador</option>
              <option value="Editor">Editor</option>
              <option value="Usuario">Usuario</option>
            </select>
          </div>
        </div>

        {/* Limpiar filtros */}
        {(searchTerm !== '' ||
          statusFilter !== 'Todos' ||
          roleFilter !== 'Todos') && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('')
              setStatusFilter('Todos')
              setRoleFilter('Todos')
              setCurrentPage(1)
            }}
            className="mt-5 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Limpiar filtros
          </button>
        )}

        <p className="mt-3 text-xs text-slate-400">
          {filteredUsers.length} usuarios encontrados
        </p>
      </div>

      {/* Tabla de usuarios */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800">
            Listado de usuarios
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Información de los usuarios registrados en NEXUS.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Usuario
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Correo electrónico
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Rol
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Estado
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                        {user.name.charAt(0)}
                      </div>

                      <span className="text-sm font-semibold text-slate-800">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                    {user.email}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-700">
                    {user.role}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        user.status === 'Activo'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}

              {currentUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-12 text-center text-sm text-slate-500"
                  >
                    No se encontraron usuarios.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Controles de paginación */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 px-6 py-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            Página {totalPages === 0 ? 0 : currentPage} de {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1 || totalPages === 0}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>

            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Usuarios


