import { navLinks } from "@/data"
import { Phone, Clock, Bus, Facebook } from "lucide-react"
import { formatPhoneNumber, scrollToSection, yearsSince2002 } from "@/helpers"
import { PHONE } from "@/data"
import Rights from "@/components/footer/Rights"

export default function Footer() {

  const handleClick = (e,id ) => {
    e.preventDefault();
    scrollToSection(id)
  }

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <section className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={() => scrollToSection("#inicio")}
              className="flex items-center gap-3 mb-4 font-bold text-2xl"
            >
              <Bus className="w-8 h-8 text-amber-400" aria-hidden="true" />
              <span>Viajes Valdivia</span>
            </a>

            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Más de {yearsSince2002()} años conectando a personas y empresas con los destinos
              más hermosos de los Altos de Jalisco. Seguridad, puntualidad y
              profesionalismo en cada viaje.
            </p>

            <div className="flex gap-4">
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 bg-white/10 rounded-lg hover:bg-green-500 hover:text-white transition"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="https://www.facebook.com/carlos.valdivia.37017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white/10 rounded-lg hover:bg-amber-500 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </section>
          {/* Fast Links */}
          <nav aria-labelledby="footer-nav">
            <h3 id="footer-nav" className="font-semibold text-lg mb-4 text-amber-400">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e,link.href)}
                    className="text-white/80 hover:text-amber-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact */}
          <section>
            <h3 id="footer-contact" className="font-semibold text-lg mb-4 text-amber-400">
              Contacto
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-white/80 hover:text-amber-400 transition"
                  aria-label={`Llamar al ${formatPhoneNumber(PHONE)}`}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {formatPhoneNumber(PHONE)}
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20" aria-labelledby="footer-hours">
              <h4 id="footer-hours" className="sr-only">Horario de atención</h4>
              <p className="text-sm text-white/60 mb-1">Horario:</p>
              <p className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5" aria-hidden="true" />
                Lun - Sáb: 8:00 AM - 10:00 PM
              </p>
            </div>
          </section>
        </div>
        {/* Footer Rights Info */}
        <Rights />
      </div>
    </footer>
  )
}
