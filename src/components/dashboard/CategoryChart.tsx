
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
} from 'recharts'

// Datos ficticios de ventas.
// Cada categoría tiene su propio color.
const categoryData = [
  { name: 'Tecnología', value: 40, fill: '#2563EB' },
  { name: 'Ropa', value: 30, fill: '#8B5CF6' },
  { name: 'Hogar', value: 20, fill: '#14B8A6' },
  { name: 'Otros', value: 10, fill: '#F59E0B' },
]

function CategoryChart() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Título de la gráfica */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Distribución de ventas
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Porcentaje de ventas por categoría
        </p>
      </div>

      {/* Contenedor responsive */}
      <div className="h-72 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={4}
              label={({ value }) => `${value}%`}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, 'Ventas']}
            />

            <Legend
              verticalAlign="bottom"
              height={30}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </article>
  )
}

export default CategoryChart
