
import { CheckCircle2, Clock, XCircle } from 'lucide-react'

// Definimos la estructura que tendrá cada operación comercial.
type Activity = {
  id: string
  customer: string
  date: string
  amount: string
  status: 'Completado' | 'Pendiente' | 'Cancelado'
}

// Datos ficticios para mostrar la actividad reciente.
const activities: Activity[] = [
  {
    id: '#ORD-1048',
    customer: 'María García',
    date: '18 nov. 2026',
    amount: '1.250 €',
    status: 'Completado',
  },
  {
    id: '#ORD-1047',
    customer: 'Carlos López',
    date: '17 nov. 2026',
    amount: '850 €',
    status: 'Pendiente',
  },
  {
    id: '#ORD-1046',
    customer: 'Laura Martín',
    date: '16 nov. 2026',
    amount: '420 €',
    status: 'Cancelado',
  },
  {
    id: '#ORD-1045',
    customer: 'Javier Sánchez',
    date: '15 nov. 2026',
    amount: '2.100 €',
    status: 'Completado',
  },
  {
    id: '#ORD-1044',
    customer: 'Ana Rodríguez',
    date: '14 nov. 2026',
    amount: '675 €',
    status: 'Pendiente',
  },
]

// Configuramos el aspecto visual de cada estado.
const statusConfig = {
  Completado: {
    icon: CheckCircle2,
    style: 'bg-emerald-50 text-emerald-700',
  },
  Pendiente: {
    icon: Clock,
    style: 'bg-amber-50 text-amber-700',
  },
  Cancelado: {
    icon: XCircle,
    style: 'bg-red-50 text-red-600',
  },
}

function RecentActivity() {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Cabecera de la tabla */}
      <div className="border-b border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800">
          Actividad reciente
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Últimas operaciones comerciales de tu negocio.
        </p>
      </div>

      {/* Contenedor con desplazamiento horizontal para móviles */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
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
            {activities.map((activity) => {
              const config = statusConfig[activity.status]
              const StatusIcon = config.icon

              return (
                <tr
                  key={activity.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-blue-600">
                    {activity.id}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-700">
                    {activity.customer}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                    {activity.date}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-800">
                    {activity.amount}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${config.style}`}
                    >
                      <StatusIcon size={14} />
                      {activity.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default RecentActivity
