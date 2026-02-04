import { PAGE_NAME } from "@/data";
import { currentYear } from "@/helpers";

export default function Rights() {
    return (
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-sm text-white/60">
                &copy; {currentYear()} {PAGE_NAME}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/40 mt-2">
                Capilla de Guadalupe, 47700, Jalisco, México.
            </p>
            <p className="text-[.6rem] text-white/40 mt-2">
                Desarrollado ing. Brian Valdivia:{" "}
                <a
                    href="mailto:ingbvn0@gmail.com"
                    className="font-bold"
                >
                    ingbvn0@gmail.com
                </a>
            </p>
        </div>
    )
}
