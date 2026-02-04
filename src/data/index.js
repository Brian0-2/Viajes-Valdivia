import busImage from "@/assets/camion-international.webp";
import vanImage from "@/assets/van-chevrolet.webp";
import carImage from "@/assets/carro-beat.webp";
import { Bus, Car, Briefcase } from "lucide-react";

export const PHONE = "3781115665"
export const PAGE_NAME = "Viajes Valdivia"

export const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export const services = [
  {
    title: "Camión de Pasajeros",
    capacity: "37 personas",
    image: busImage,
    icon: Bus,
    description:
      "Transporte seguro y cómodo para grupos grandes, ideal para personal empresarial, excursiones y viajes colectivos.",
    features: [
      "Transporte corporativo y escolar",
      "Excursiones y viajes recreativos",
      "Rutas personalizadas según necesidad",
      "Amplio espacio y confort para todos los pasajeros"
    ],
  },
  {
    title: "Van Chevrolet",
    capacity: "14 personas",
    image: vanImage,
    icon: Car,
    description:
      "Vehículo versátil de mediana capacidad, perfecto para traslados turísticos, eventos y viajes interurbanos.",
    features: [
      "Traslados turísticos y empresariales",
      "Eventos y viajes familiares",
      "Rutas personalizadas en carretera",
      "Comodidad y seguridad para grupos medianos"
    ],
  },
  {
    title: "Vehículo Privado",
    capacity: "4 personas",
    image: carImage,
    icon: Briefcase,
    description:
      "Servicio privado y exclusivo para viajes de negocios, traslados al aeropuerto o transporte personal express.",
    features: [
      "Traslados ejecutivos y corporativos",
      "Viajes locales y express",
      "Servicio puntual y personalizado",
      "Comodidad y privacidad garantizadas"
    ],
  },
];

export const selectServiceOptions = [
  "Camión de pasajeros (37 personas)",
  "Van Chevrolet (14 personas)",
  "Vehículo privado (4 personas)",
  "Otro",
];