import busImage from "@/assets/camion-international.webp";
import vanImage from "@/assets/van-chevrolet.webp";
import carImage from "@/assets/carro-beat.webp";
import { Bus, Car, Briefcase } from "lucide-react";

export const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    // { name: "Destinos", href: "#destinos" },
    // { name: "Nosotros", href: "#nosotros" },
    // { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

export const services = [
  {
    title: "Camión de Pasajeros",
    capacity: "37 personas",
    image: busImage,
    icon: Bus,
    description:
      "Ideal para transporte de personal empresarial y viajes grupales.",
    features: ["Transporte de personal", "Viajes grupales", "Excursiones"],
  },
  {
    title: "Van Chevrolet",
    capacity: "14 personas",
    image: vanImage,
    icon: Car,
    description:
      "Perfecta para tours turísticos y traslados a aeropuerto.",
    features: ["Tours turísticos", "Traslados aeropuerto", "Eventos especiales"],
  },
  {
    title: "Vehículo Ejecutivo",
    capacity: "4 personas",
    image: carImage,
    icon: Briefcase,
    description:
      "Servicio privado y personalizado para viajes de negocios.",
    features: ["Servicio VIP", "Traslados privados", "Viajes al aeropueto"],
  },
];