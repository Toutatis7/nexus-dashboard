
import type { LucideIcon } from 'lucide-react'

// Propiedades que recibirá nuestro componente.
type StatCardProps = {
  title: string
  value: string
  percentage: string
  icon: LucideIcon
  positive: boolean
}

// Componente reutilizable para mostrar un indicador.
function StatCard({
  title,
  value,
  percentage,
  icon: Icon,
  positive,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Cabecera de la tarjeta */}
      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={22} />
        </div>

      </div>

      {/* Valor principal */}
      <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800">
        {value}
      </h3>

      {/* Variación porcentual */}
      <div className="mt-3 flex items-center gap-2">

        <span
          className={`text-sm font-semibold ${
            positive ? 'text-emerald-600' : 'text-red-500'
          }`}
        >
          {percentage}
        </span>

        <span className="text-xs text-slate-400">
          respecto al mes anterior
        </span>

      </div>

    </article>
  )
}

export default StatCard
