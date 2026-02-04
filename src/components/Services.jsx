import Title from "@/ui/Title"
import { services } from "@/data"

export default function Services() {

  return (
    <section
      id="servicios"
      className="py-24 bg-linear-to-b from-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <Title
          animation="fade-right"
          title="Nuestra Flotilla"
          description="Contamos con vehículos modernos y seguros para cada necesidad de transporte"
        />

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md
                         hover:shadow-2xl transition-all duration-300
                         group border border-gray-100"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             group-hover:scale-105"
                />

                {/* Capacity badge */}
                <span className="absolute top-4 right-4
                                 bg-amber-500 text-white
                                 text-sm font-semibold
                                 px-4 py-1.5 rounded-full shadow-md">
                  {service.capacity}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-blue-900/10 rounded-xl">
                    <service.icon className="w-5 h-5 text-blue-900" />
                  </div>

                  <h3 className="text-xl font-semibold text-blue-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
