import { ChevronUp } from "lucide-react";
import { scrollToTop } from "../helpers";

export default function ScrollTop({showScrollTop}) {
    return (
        <button
            onClick={() => scrollToTop()}
            className={`fixed bottom-8 right-8 w-14 h-14 bg-linear-to-b from-blue-900 to-blue-600 animate-pulse
              rounded-full text-white cursor-pointer border border-white 
              shadow-lg hover:shadow-xl hover:scale-105 hover:brightness-110 transition-transform duration-300 ease-out z-50
              flex items-center justify-center 
              ${showScrollTop
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-5"
                }
            `
            }
            aria-label="Volver arriba"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    )
}
