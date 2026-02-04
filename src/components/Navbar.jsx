import { Menu, X, Bus } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks, PAGE_NAME } from "@/data"
import Button from "@/ui/Button"
import ScrollTop from "@/ui/ScrollTop"
import { scrollToSection } from "@/helpers"

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e,id) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled
          ? "bg-white/95 shadow-md"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            // href="#inicio"
            onClick={() => handleClick("#inicio")}
            className="flex items-center gap-2 font-bold text-xl transition-colors"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="2500"
          >
            <Bus
              className={`w-10 h-10 transition-colors
                ${isScrolled ? "text-blue-900" : "text-amber-400"}
              `}
            />
            <span
              className={`transition-colors
                ${isScrolled ? "text-blue-900" : "text-white"}
              `}
            >
              {PAGE_NAME}
            </span>
          </a>

          {/* Desktop */}
          <div
            className="hidden lg:flex items-center gap-8"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="2500"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e,link.href)}
                className={`relative text-sm font-medium transition-colors
                  ${isScrolled
                    ? "text-blue-900 hover:text-amber-500"
                    : "text-white hover:text-amber-400"
                  }
                `}
              >
                {link.name}
              </a>
            ))}

            <Button
              onClick={(e) => handleClick(e,"#contacto")}
              className={`font-semibold px-5 py-2 rounded-lg shadow-md transition-all
                ${isScrolled
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
            >
              Cotizar Ahora
            </Button>
          </div>

          {/* Mobile Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors
              ${isScrolled ? "text-blue-900" : "text-white"}
            `}
          >
            <Menu
              className="w-10 h-10"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="2500"
            />
          </Button>

        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300
          ${isOpen ? "visible" : "invisible"}
        `}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-3/4 bg-white p-6
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-900">Menú</h2>
            <Button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-blue-900" />
            </Button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) =>handleClick(e,link.href)}
                className="text-lg font-medium text-blue-900 hover:text-amber-500 transition"
              >
                {link.name}
              </a>
            ))}

            <Button
              onClick={(e) => handleClick(e,"#contacto")}
              className="bg-amber-500 hover:bg-amber-600 text-white mt-4 py-3 rounded-lg font-semibold shadow-md"
            >
              Cotizar Ahora
            </Button>
          </div>
        </div>
      </div>
      <ScrollTop
        showScrollTop={isScrolled}
      />
    </header>
  )
}
