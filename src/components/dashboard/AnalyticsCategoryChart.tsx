
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

// Datos ficticios de ventas por categoría.
const categoryData = [
  { name: 'Electrónica', value: 35, fill: '#3b82f6' },
  { name: 'Informática', value: 25, fill: '#8b5cf6' },
  { name: 'Accesorios', value: 20, fill: '#f59e0b' },
  { name: 'Hogar', value: 12, fill: '#10b981' },
  { name: 'Otros', value: 8, fill: '#64748b' },
]

function AnalyticsCategoryChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Título del gráfico */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Ventas por categoría
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Distribución porcentual de las ventas
        </p>
      </div>

      {/* Gráfico circular */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={105}
              label={({ name, percent }) =>
                `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((category) => (
                <Cell
                  key={category.name}
                  fill={category.fill}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, 'Ventas']}
            />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default AnalyticsCategoryChart
