import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import presidentaImg from "@/assets/Presidenta.png";
import vicepresidentaImg from "@/assets/Vicepresidenta.png";
import LiderdeEventosImg from "@/assets/LiderdeEventos.png";
import LiderdePMOImg from "@/assets/LiderdePMO.png";
import LiderdeFinanzas from "@/assets/LiderdeFinanzas.png";
import LiderdeMarketing from "@/assets/LiderdeMarketing.png";
import LiderdeTalentoHumano from "@/assets/LiderdeTalentoHumano.png";

const members = [
  { name: "Nombre Apellido", role: "Presidenta",              photo: presidentaImg },
  { name: "Nombre Apellido", role: "Vicepresidenta",          photo: vicepresidentaImg },
  { name: "Nombre Apellido", role: "Líder de Eventos",        photo: LiderdeEventosImg },
  { name: "Nombre Apellido", role: "Líder de PMO",            photo: LiderdePMOImg },
  { name: "Nombre Apellido", role: "Líder de Finanzas",       photo: LiderdeFinanzas },
  { name: "Nombre Apellido", role: "Líder de Marketing",      photo: LiderdeMarketing },
  { name: "Nombre Apellido", role: "Líder de Talento Humano", photo: LiderdeTalentoHumano },
];

// Visible según breakpoint: 1 en móvil, 2 en sm, 3 en lg+
const useVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const BoardSection = () => {
  const [current, setCurrent] = useState(0);

  // Calculamos visible dinámicamente con un estado separado
  const [visible, setVisible] = useState<number>(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });

  // Actualizar "visible" al cambiar el tamaño de ventana
  useState(() => {
    const onResize = () => {
      const v = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setVisible(v);
      setCurrent((c) => Math.min(c, Math.max(0, members.length - v)));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  const maxIndex = members.length - visible;
  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex]);

  return (
    <section id="junta" className="py-16 sm:py-20" style={{ background: "#F0FBFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 text-white"
            style={{ background: "#FF610F" }}
          >
            CEPMI 2026
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#200F38" }}>
            Junta{" "}
            <span style={{ color: "#3FC0F0" }}>Directiva</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full" style={{ background: "#3FC0F0" }} />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Profesionales comprometidos con promover la excelencia en la gestión
            de proyectos y fortalecer la presencia del PMI en la región norte del país.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center gap-2 sm:gap-4">

          {/* Botón anterior */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 disabled:opacity-30 active:scale-95"
            style={{ background: "#290A64" }}
          >
            <ChevronLeft size={18} className="sm:hidden" />
            <ChevronLeft size={22} className="hidden sm:block" />
          </button>

          {/* Grid de cards — 1 col móvil / 2 col sm / 3 col lg */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {members.map((m, i) => {
              const isVisible = i >= current && i < current + visible;
              return (
                <div
                  key={i}
                  style={{ display: isVisible ? "block" : "none" }}
                  className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white"
                >
                  {/* Foto */}
                  <div
                    className="w-full overflow-hidden"
                    style={{
                      aspectRatio: "3/4",
                      background: "linear-gradient(180deg, #3FC0F0 0%, #1a9fd4 100%)",
                    }}
                  >
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-bold text-white/40">
                          {m.role.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4 text-center">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 border-2"
                      style={{ color: "#FF610F", borderColor: "#FF610F" }}
                    >
                      {m.role}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base mb-2" style={{ color: "#200F38" }}>
                      {m.name}
                    </h4>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 transition-colors active:text-blue-700"
                      aria-label={`LinkedIn de ${m.name}`}
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Siguiente"
            className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 disabled:opacity-30 active:scale-95"
            style={{ background: "#290A64" }}
          >
            <ChevronRight size={18} className="sm:hidden" />
            <ChevronRight size={22} className="hidden sm:block" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a miembro ${i + 1}`}
              className="rounded-full transition-all duration-200 active:scale-110"
              style={{
                width: i === current ? "28px" : "10px",
                height: "10px",
                background: i === current ? "#3FC0F0" : "#c5e8f5",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoardSection;