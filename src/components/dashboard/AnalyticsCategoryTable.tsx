
import { TrendingUp, TrendingDown } from 'lucide-react'

// Definimos la estructura de cada categoría.
type Category = {
  name: string
  sales: number
  revenue: number
  growth: number
}

// Datos ficticios de rendimiento por categoría.
const categories: Category[] = [
  {
    name: 'Electrónica',
    sales: 450,
    revenue: 18500,
    growth: 15.2,
  },
  {
    name: 'Informática',
    sales: 320,
    revenue: 14200,
    growth: 8.5,
  },
  {
    name: 'Accesorios',
    sales: 280,
    revenue: 8500,
    growth: 5.3,
  },
  {
    name: 'Hogar',
    sales: 150,
    revenue: 4200,
    growth: -2.4,
  },
  {
    name: 'Otros',
    sales: 84,
    revenue: 2850,
    growth: 3.7,
  },
]

function AnalyticsCategoryTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Encabezado */}
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800">
          Rendimiento por categoría
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Comparativa de ventas e ingresos por categoría
        </p>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left">

          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Categoría
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Ventas
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Ingresos
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Crecimiento
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {categories.map((category) => (
              <tr
                key={category.name}
                className="hover:bg-slate-50"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  {category.name}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {category.sales}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {category.revenue.toLocaleString('es-ES')} €
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">

                    {category.growth >= 0 ? (
                      <TrendingUp
                        size={16}
                        className="text-green-600"
                      />
                    ) : (
                      <TrendingDown
                        size={16}
                        className="text-red-600"
                      />
                    )}

                    <span
                      className={`text-sm font-medium ${
                        category.growth >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {category.growth > 0 ? '+' : ''}
                      {category.growth.toLocaleString('es-ES')} %
                    </span>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default AnalyticsCategoryTable
