
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

// Datos ficticios de ingresos mensuales.
const revenueData = [
  { month: 'Ene', revenue: 12500 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 14200 },
  { month: 'Abr', revenue: 21300 },
  { month: 'May', revenue: 19500 },
  { month: 'Jun', revenue: 26800 },
  { month: 'Jul', revenue: 31200 },
  { month: 'Ago', revenue: 28700 },
  { month: 'Sep', revenue: 35400 },
  { month: 'Oct', revenue: 38200 },
  { month: 'Nov', revenue: 42500 },
  { month: 'Dic', revenue: 48250 },
]

function RevenueChart() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Título de la gráfica */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Evolución de ingresos
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Ingresos mensuales durante el año
        </p>
      </div>

      {/* Contenedor responsive de la gráfica */}
      <div className="h-72 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              tickFormatter={(value: number) => `${value / 1000}k €`}
            />

            <Tooltip
              formatter={(value) => [
                `${Number(value).toLocaleString('es-ES')} €`,
                'Ingresos',
              ]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4, fill: '#2563EB' }}
              activeDot={{ r: 7 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </article>
  )
}

export default RevenueChart

