
import AnalyticsRevenueChart from '../components/dashboard/AnalyticsRevenueChart'
import AnalyticsCategoryChart from '../components/dashboard/AnalyticsCategoryChart'
import AnalyticsCategoryTable from '../components/dashboard/AnalyticsCategoryTable'

import {
  Euro,
  ShoppingCart,
  Users,
  TrendingUp,
} from 'lucide-react'

function Analiticas() {
  return (
    <section>
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Analíticas
        </h1>

        <p className="mt-2 text-slate-500">
          Analiza el rendimiento y la evolución de tu negocio.
        </p>
      </div>

      {/* Indicadores KPI */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {/* Ingresos */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Ingresos totales
            </p>
            <Euro size={22} className="text-blue-600" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            48.250 €
          </h2>

          <p className="mt-2 text-sm text-green-600">
            +12,5 % respecto al mes anterior
          </p>
        </div>

        {/* Pedidos */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Pedidos realizados
            </p>
            <ShoppingCart size={22} className="text-purple-600" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            1.284
          </h2>

          <p className="mt-2 text-sm text-green-600">
            +8,3 % respecto al mes anterior
          </p>
        </div>

        {/* Clientes */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Clientes activos
            </p>
            <Users size={22} className="text-orange-500" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            8.549
          </h2>

          <p className="mt-2 text-sm text-green-600">
            +5,7 % respecto al mes anterior
          </p>
        </div>

        {/* Crecimiento */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Crecimiento
            </p>
            <TrendingUp size={22} className="text-green-600" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            12,5 %
          </h2>

          <p className="mt-2 text-sm text-green-600">
            Evolución positiva del negocio
          </p>
        </div>

      </div>
      {/*Graficos de analiticas*/}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Evolucion de ingresos */}
        <AnalyticsRevenueChart />
        {/* Ventas por categoria */}
        <AnalyticsCategoryChart />
      </div>
      {/* Tabla de rendimiento por categoria */}
      <AnalyticsCategoryTable />
    </section>
  )
}

export default Analiticas

