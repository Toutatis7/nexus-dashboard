import { useState } from 'react'
import {
  HelpCircle,
  Mail,
  MessageCircle,
  ChevronDown,
} from 'lucide-react'

function Ayuda() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqItems = [
      {
        question: '¿Qué es NEXUS?',
        answer:
          'NEXUS es un panel de control empresarial que permite visualizar y consultar información sobre ventas, usuarios y rendimiento del negocio.',
      },
      {
        question: '¿Cómo puedo gestionar los usuarios?',
        answer:
          'Desde la sección Usuarios puedes consultar el listado, buscar personas y filtrar los resultados por rol y estado.',
      },
      {
        question: '¿Cómo puedo consultar las ventas?',
        answer:
          'En la sección Ventas encontrarás los pedidos registrados, sus importes y sus estados. También puedes buscar y filtrar los resultados.',
      },
      {
        question: '¿Puedo modificar los datos de mi perfil?',
        answer:
          'Sí. Desde Configuración puedes modificar los datos del perfil y seleccionar tus preferencias de notificaciones.',
      },
      {
        question: '¿Los cambios se guardan permanentemente?',
        answer:
          'Esta versión es una demostración. Los datos son ficticios y los cambios realizados en los formularios se mantienen únicamente mientras la aplicación está abierta.',
      },
    ]

  return (
    <section>
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Centro de ayuda
        </h1>

        <p className="mt-2 text-slate-500">
          Encuentra respuestas y ayuda para utilizar NEXUS.
        </p>
      </div>

      {/* Tarjetas de ayuda */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Preguntas frecuentes */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <HelpCircle size={28} className="text-blue-600" />

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            Preguntas frecuentes
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Consulta las respuestas a las dudas más habituales.
          </p>
        </div>

        {/* Correo electrónico */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Mail size={28} className="text-purple-600" />

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            Correo electrónico
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Consulta los canales de contacto disponibles para resolver tus dudas.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-purple-600">
            Canal de contacto de demostracion
          </span>
        </div>

        {/* Soporte */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <MessageCircle size={28} className="text-green-600" />

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            Soporte
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Consulta las preguntas frecuentes para aprender a utilizar las funcionalidades de NEXUS.
          </p>

          <span className="mt-4 inline-block text-sm font-medium text-green-600">
            Disponible en esta demostracion.
          </span>
        </div>

      </div>
      {/* Preguntas frecuentes */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-slate-800">
          Preguntas frecuentes
        </h2>

        <div className="divide-y divide-slate-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-4">
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg text-left font-medium text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <span>{item.question}</span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 pr-8 text-sm leading-6 text-slate-500">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ayuda
