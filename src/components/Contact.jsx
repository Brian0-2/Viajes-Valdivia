import { Send, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import Button from "@/ui/Button"
import Title from "@/ui/Title"
import { selectServiceOptions, PHONE } from "@/data"
import { formatPhoneNumber } from "@/helpers"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `
      Hola, soy: 
      *${formData.name}*

      *Teléfono:* 
      ${formData.phone}
      *Servicio:* 
      ${formData.service}
      *Mensaje:*
      ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
      text
    )}`

    window.open(whatsappURL, "_blank")
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <section
      id="contacto"
      className="pb-24 bg-linear-to-b from-white to-gray-300"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <Title
          animation="fade-left"
          title="Contáctanos"
          description="Escríbenos por WhatsApp o llámanos para cotizar tu servicio"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2
                             focus:outline-none focus:ring-2 focus:ring-blue-600
                             transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="10 dígitos"
                  minLength={10}
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2
                             focus:outline-none focus:ring-2 focus:ring-blue-600
                             transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">
                Tipo de servicio
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white
                           focus:outline-none focus:ring-2 focus:ring-blue-600
                           transition"
              >
                <option
                  className="disable:bg-gray-200"
                  disabled
                  value=""
                >
                  Selecciona un servicio
                </option>
                {selectServiceOptions.map(option => (
                  <option
                    key={option}
                    value={option}
                    className="cursor-pointer"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900 mb-1">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntanos fecha, destino y número de pasajeros..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-blue-600
                           transition"
              />
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2
                         bg-amber-500 hover:bg-amber-600
                         text-white py-3 rounded-lg font-semibold
                         shadow-md transition"
            >
              <Send className="w-4 h-4" />
              Enviar por WhatsApp
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-900">
                Información de contacto
              </h3>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 hover:opacity-80 transition"
              >
                <div className="p-3 bg-blue-900/10 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium text-gray-900">{formatPhoneNumber(PHONE)}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium text-gray-900">
                    Capilla de Guadalupe, 47700, Jalisco, México
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/10 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Horario</p>
                  <p className="font-medium text-gray-900">
                    Lun - Sáb: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="w-full flex items-center justify-center gap-2
                         bg-blue-600 hover:bg-blue-700
                         text-white py-3 rounded-lg font-semibold
                         shadow-md transition"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
