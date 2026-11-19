
import { useState } from 'react'

function Configuracion() {
  // Estado del nombre del usuario.
  const [name, setName] = useState('Vicens García')

  // Estado del correo electrónico.
  const [email, setEmail] = useState('vicens@nexus.com')

  // Estado del nombre de la empresa.
  const [company, setCompany] = useState('NEXUS Business')

  // Estado para mostrar el mensaje de confirmacion.
  const [saved, setSaved] = useState(false)

  // Preferencias de notificaciones.
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [salesNotifications, setSalesNotifications] = useState(true)
  const [marketingNotifications, setMarketingNotifications] = useState(false)

  // Estado del tema visual.
  const [theme, setTheme] = useState('claro')

  // Estado de confirmación de las notificaciones.
  const [notificationsSaved, setNotificationsSaved] = useState(false)

  return (
    <section>
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Configuración
        </h1>

        <p className="mt-2 text-slate-500">
          Gestiona las preferencias y los datos de tu cuenta.
        </p>
      </div>

      {/* Información del perfil */}
      <div className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800">
            Información del perfil
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza los datos de tu cuenta.
          </p>
        </div>

        <form 
          className="space-y-5"  
          onSubmit={(event) => {
            event.preventDefault() 
            setSaved(true)
        }}>

          {/* Nombre */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nombre completo
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                setSaved(false)
              } }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Correo electrónico
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setSaved(false)
              } }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Empresa */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Empresa
            </label>

            <input
              type="text"
              value={company}
              onChange={(event) => {
                setCompany(event.target.value)
                setSaved(false)
              } }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {/* Botón para guardar */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              onClick={() => setSaved(false)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Guardar cambios
            </button>

            {saved && (
              <p className="text-sm font-medium text-green-600">
                ¡Cambios guardados correctamente!
              </p>
            )}
          </div>

        </form>
      </div>
      {/* Preferencias de notificaciones */}
      <div className="mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800">
            Preferencias de notificaciones
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Elige qué notificaciones quieres recibir.
          </p>
        </div>

        <div className="space-y-5">

          {/* Notificaciones por correo */}
          <label className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Notificaciones por correo
              </p>
              <p className="text-sm text-slate-500">
                Recibe actualizaciones importantes por email.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(event) => {
                setEmailNotifications(event.target.checked)
                setNotificationsSaved(false)
              } }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          {/* Notificaciones de ventas */}
          <label className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Notificaciones de ventas
              </p>
              <p className="text-sm text-slate-500">
                Recibe avisos sobre nuevos pedidos y ventas.
              </p>
            </div>

            <input
              type="checkbox"
              checked={salesNotifications}
              onChange={(event) => {
                setSalesNotifications(event.target.checked)
                setNotificationsSaved(false)
              } }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          {/* Notificaciones comerciales */}
          <label className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Comunicaciones comerciales
              </p>
              <p className="text-sm text-slate-500">
                Recibe novedades y noticias de NEXUS.
              </p>
            </div>

            <input
              type="checkbox"
              checked={marketingNotifications}
              onChange={(event) => {
                setMarketingNotifications(event.target.checked)
                setNotificationsSaved(false)
              } }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

        </div>
      </div>

      {/* Guardar preferencias */}
      <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">

        <button
          type="button"
          onClick={() => setNotificationsSaved(true)}
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Guardar preferencias
        </button>

        {notificationsSaved && (
          <p className="text-sm font-medium text-green-600">
            ¡Preferencias guardadas correctamente!
          </p>
        )}

      </div>


      {/* Preferencias de apariencia */}
      <div className="mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800">
            Apariencia
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Personaliza el aspecto visual de NEXUS.
          </p>
        </div>

        <div className="space-y-4">

          {/* Tema claro */}
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Tema claro
              </p>
              <p className="text-sm text-slate-500">
                Utiliza una interfaz luminosa.
              </p>
            </div>

            <input
              type="radio"
              name="theme"
              value="Claro"
              checked={theme === 'Claro'}
              onChange={(event) => setTheme(event.target.value)}
              className="h-4 w-4 accent-blue-600"
            />
          </label>

          {/* Tema oscuro */}
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Tema oscuro
              </p>
              <p className="text-sm text-slate-500">
                Utiliza una interfaz oscura.
              </p>
            </div>

            <input
              type="radio"
              name="theme"
              value="Oscuro"
              checked={theme === 'Oscuro'}
              onChange={(event) => setTheme(event.target.value)}
              className="h-4 w-4 accent-blue-600"
            />
          </label>

          {/* Tema del sistema */}
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-4 hover:bg-slate-50">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Tema del sistema
              </p>
              <p className="text-sm text-slate-500">
                Utiliza la preferencia de tu dispositivo.
              </p>
            </div>

            <input
              type="radio"
              name="theme"
              value="Sistema"
              checked={theme === 'Sistema'}
              onChange={(event) => setTheme(event.target.value)}
              className="h-4 w-4 accent-blue-600"
            />
          </label>

        </div>

      </div>

    </section>
  )
}

export default Configuracion

