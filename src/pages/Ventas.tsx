
import { useState } from 'react'
import {
  ShoppingCart,
  Euro,
  Clock,
  CheckCircle2,
} from 'lucide-react'

// Definimos los posibles estados de un pedido.
type SaleStatus = 'Completado' | 'Pendiente' | 'Cancelado'

// Definimos la estructura de una venta.
type Sale = {
  id: number
  customer: string
  date: string
  amount: number
  status: SaleStatus
}

// Datos ficticios de ventas para NEXUS.
const sales: Sale[] = [
  {
    id: 1001,
    customer: 'María García',
    date: '18/11/2026',
    amount: 1250,
    status: 'Completado',
  },
  {
    id: 1002,
    customer: 'Carlos López',
    date: '17/11/2026',
    amount: 850,
    status: 'Pendiente',
  },
  {
    id: 1003,
    customer: 'Laura Martín',
    date: '16/11/2026',
    amount: 2400,
    status: 'Completado',
  },
  {
    id: 1004,
    customer: 'Javier Sánchez',
    date: '15/11/2026',
    amount: 650,
    status: 'Cancelado',
  },
  {
    id: 1005,
    customer: 'Ana Rodríguez',
    date: '14/11/2026',
    amount: 1800,
    status: 'Completado',
  },
  {
    id: 1006,
    customer: 'Pedro Fernández',
    date: '13/11/2026',
    amount: 950,
    status: 'Pendiente',
  },
]

// Componente principal.
function Ventas() {
  // Estado del buscador.
  const [searchTerm, setSearchTerm] = useState('')

  // Estado del filtro de pedidos.
  const [statusFilter, setStatusFilter] = useState('Todos')

  // Número de pedidos que mostraremos por página.
  const salesPerPage = 5

  // Página actual del listado.
  const [currentPage, setCurrentPage] = useState(1)   
  // Calculamos el importe total de todas las ventas.
  const totalRevenue = sales.reduce(
    (total, sale) => total + sale.amount,
    0
  )

  // Calculamos el número total de pedidos.
  const totalOrders = sales.length

  // Calculamos los pedidos completados.
  const completedOrders = sales.filter(
    (sale) => sale.status === 'Completado'
  ).length
  // Calculamos los pedidos pendientes.
  const pendingOrders = sales.filter(
    (sale) => sale.status === 'Pendiente'
  ).length

  // Filtramos los pedidos por cliente, número de pedido y estado.
  const filteredSales = sales.filter((sale) => {
    const search = searchTerm.toLowerCase()

    const matchesSearch =
      sale.customer.toLowerCase().includes(search) ||
      sale.id.toString().includes(search)

    const matchesStatus =
      statusFilter === 'Todos' || sale.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Calculamos el número total de páginas.
  const totalPages = Math.ceil(filteredSales.length / salesPerPage)

  // Calculamos el índice inicial.
  const startIndex = (currentPage - 1) * salesPerPage

  // Obtenemos los pedidos de la página actual.
  const currentSales = filteredSales.slice(
    startIndex,
    startIndex + salesPerPage
  )

  return (
    <section>
      {/* Cabecera */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Gestión de ventas
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Consulta y administra los pedidos de NEXUS.
        </p>
      </div>

      
      {/* Indicadores de ventas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {/* Facturación total */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Facturación total
            </p>
            <Euro className="text-blue-600" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {totalRevenue.toLocaleString('es-ES')} €
          </h2>
        </article>

        {/* Total de pedidos */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Total pedidos
            </p>
            <ShoppingCart className="text-violet-600" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {totalOrders}
          </h2>
        </article>

        {/* Pedidos completados */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Completados
            </p>
            <CheckCircle2 className="text-emerald-600" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {completedOrders}
          </h2>
        </article>

        {/* Pedidos pendientes */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Pendientes
            </p>
            <Clock className="text-amber-500" size={22} />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {pendingOrders}
          </h2>
        </article>

      </div>


      {/* Buscador y filtros */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Buscador */}
          <div>
            <label
              htmlFor="search-sales"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Buscar pedidos
            </label>

            <input
              id="search-sales"
              type="search"
              value={searchTerm}
              onChange={(event) => {setSearchTerm(event.target.value); setCurrentPage(1)}}
              placeholder="Buscar por cliente o número de pedido..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Filtro por estado */}
          <div>
            <label
              htmlFor="sales-status"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Filtrar por estado
            </label>

            <select
              id="sales-status"
              value={statusFilter}
              onChange={(event) => {setStatusFilter(event.target.value); setCurrentPage(1)}}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Todos">Todos los estados</option>
              <option value="Completado">Completados</option>
              <option value="Pendiente">Pendientes</option>
              <option value="Cancelado">Cancelados</option>
            </select>
          </div>

        </div>

        <p className="mt-4 text-xs text-slate-400">
          {filteredSales.length} pedidos encontrados
        </p>

        {(searchTerm !== '' || statusFilter !== 'Todos') && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('')
              setStatusFilter('Todos')
              setCurrentPage(1)
            }}
            className="mt-4 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
          >
            Limpiar filtros
          </button>
        )}

      </div>



      {/* Tabla de ventas */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Cabecera de la tabla */}
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-800">
            Listado de pedidos
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Consulta las operaciones registradas en NEXUS.
          </p>
        </div>

        {/* Contenedor responsive */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Pedido
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Cliente
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Fecha
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Importe
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Estado
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {currentSales.map((sale) => (
                <tr
                  key={sale.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-800">
                    #{sale.id}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {sale.customer}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                    {sale.date}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-800">
                    {sale.amount.toLocaleString('es-ES')} €
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        sale.status === 'Completado'
                          ? 'bg-emerald-50 text-emerald-700'
                          : sale.status === 'Pendiente'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {sale.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredSales.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-slate-500"
                  >
                    No se encontraron pedidos.
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>
        {/* Controles de paginación */}
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">

          {/* Información de la página actual */}
          <p className="text-sm text-slate-500">
            Página {totalPages === 0 ? 0 : currentPage} de {totalPages}
          </p>

          {/* Botones de navegación */}
          <div className="flex gap-2">

            <button
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1 || totalPages === 0}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>

            <button
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage >= totalPages}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente
            </button>

          </div>
        </div>
      </div>




    </section>
  )
}

export default Ventas

