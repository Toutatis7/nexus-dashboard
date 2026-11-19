
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Datos ficticios de ingresos mensuales.
const revenueData = [
  { month: 'Enero', revenue: 3200 },
  { month: 'Febrero', revenue: 4100 },
  { month: 'Marzo', revenue: 3800 },
  { month: 'Abril', revenue: 5200 },
  { month: 'Mayo', revenue: 4800 },
  { month: 'Junio', revenue: 6100 },
  { month: 'Julio', revenue: 5700 },
  { month: 'Agosto', revenue: 7200 },
  { month: 'Septiembre', revenue: 6800 },
  { month: 'Octubre', revenue: 8100 },
  { month: 'Noviembre', revenue: 7600 },
  { month: 'Diciembre', revenue: 9200 },
]

function AnalyticsRevenueChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Título del gráfico */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Evolución de ingresos
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Ingresos mensuales durante el año
        </p>
      </div>

      {/* Gráfico */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              tickFormatter={(value: number) => `${value} €`}
            />

            <Tooltip
              formatter={(value) => [`${value} €`, 'Ingresos']}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default AnalyticsRevenueChart
