
import {
  Wallet,
  ShoppingCart,
  Users,
  ChartNoAxesCombined,
} from 'lucide-react'

import StatCard from '../components/dashboard/StatCard'

function Dashboard() {
  return (
    <section>

      {/* Título y descripción del Dashboard */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Resumen general
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Consulta los indicadores principales de tu negocio.
        </p>
      </div>

      {/* Cuadrícula de indicadores KPI */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Ingresos totales"
          value="48.250 €"
          percentage="+12,5 %"
          icon={Wallet}
          positive={true}
        />

        <StatCard
          title="Ventas"
          value="1.284"
          percentage="+8,2 %"
          icon={ShoppingCart}
          positive={true}
        />

        <StatCard
          title="Usuarios"
          value="8.549"
          percentage="+5,4 %"
          icon={Users}
          positive={true}
        />

        <StatCard
          title="Conversión"
          value="3,8 %"
          percentage="-1,2 %"
          icon={ChartNoAxesCombined}
          positive={false}
        />

      </div>

    </section>
  )
}

export default Dashboard


