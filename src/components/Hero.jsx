import heroImage from '@/assets/hero-altos-jalisco.webp'
import Button from '@/ui/Button'
import { ChevronDown } from 'lucide-react'
import { yearsSince2002,scrollToSection } from '@/helpers'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Altos de Jalisco"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl px-4 text-center"
      >
        {/* Subtitle */}
        <p
          className="text-white/80 text-sm md:text-base tracking-[0.25em] uppercase mb-4"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="0"
        >
          Transporte turístico y empresarial
        </p>

        {/* Title */}
        <h1
          className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          Viaja con confianza por los{' '}
          <span className="block text-amber-400 drop-shadow-lg animate-pulse">
            Altos de Jalisco
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1700"
        >
          {yearsSince2002()}+ años transportando empresas y turistas
          <span className="text-amber-300 font-semibold">
            {' '}con seguridad y confianza.
          </span>
        </p>

        {/* Info */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="2500"
        >
          <Button
            onClick={() => scrollToSection('#servicios')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Conoce Nuestros Servicios
          </Button>

          <Button
            onClick={() => scrollToSection('#contacto')}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <Button
        onClick={() => scrollToSection('#servicios')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </Button>
    </section>
  )
}
