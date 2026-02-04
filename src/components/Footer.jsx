import { navLinks } from "@/data"
import { currentYear } from "@/helpers"
import { Phone,Clock, Bus, Facebook } from "lucide-react"

export default function Footer() {

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & descripción */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={() => scrollToSection("#inicio")}
              className="flex items-center gap-3 mb-4 font-bold text-2xl"
            >
              <Bus className="w-8 h-8 text-amber-400" />
              <span>Viajes Valdivia</span>
            </a>

            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Más de 25 años conectando a personas y empresas con los destinos
              más hermosos de los Altos de Jalisco. Seguridad, puntualidad y
              profesionalismo en cada viaje.
            </p>

            <div className="flex gap-4">
            <a
              href="https://wa.me/3781115665"
              target="_blank"
              aria-label="whatsapp"
              className="p-3 bg-white/10 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              <Phone className="w-5 h-5" />
            </a>

              <a
                href="https://www.facebook.com/carlos.valdivia.37017"
                target="_blank"
                aria-label="facebook"
                className="p-3 bg-white/10 rounded-lg hover:bg-amber-500 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <nav>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-amber-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">
              Contacto
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:3781115665"
                  className="flex items-center gap-3 text-white/80 hover:text-amber-400 transition"
                >
                  <Phone className="w-5 h-5" />
                  (378) 111 5665
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/60 mb-1">Horario:</p>
              <p className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5" />
                Lun - Sáb: 8:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {currentYear} Viajes Valdivia. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40 mt-2">
            Capilla de Guadalupe, 47700, Jalisco, México.
          </p>
        </div>

      </div>
    </footer>
  )
}
