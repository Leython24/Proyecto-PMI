import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import presidentaImg from "@/assets/Presidenta.png";
import vicepresidentaImg from "@/assets/Vicepresidenta.png";
import LiderdeEventosImg from "@/assets/LiderdeEventos.png";
import LiderdePMOImg from "@/assets/LiderdePMO.png";
import LiderdeFinanzas from "@/assets/LiderdeFinanzas.png";
import LiderdeMarketing from "@/assets/LiderdeMarketing.png";
import LiderdeTalentoHumano from "@/assets/LiderdeTalentoHumano.png";

const members = [
  { name: "Diana Barrantes", role: "Presidenta",              photo: presidentaImg,        linkedin: "https://www.linkedin.com/in/dianabarrantesgallardo/" },
  { name: "Rosselly Villanueva", role: "Vicepresidenta",          photo: vicepresidentaImg,    linkedin: "https://www.linkedin.com/in/rosselly-villanueva-mendoza-02b080377/" },
  { name: "Rodrigo Tasilla", role: "Líder de Eventos",        photo: LiderdeEventosImg,    linkedin: "https://www.linkedin.com/in/rodrigotasilladurand/" },
  { name: "Daniel Sánchez", role: "Líder de PMO",            photo: LiderdePMOImg,        linkedin: "https://www.linkedin.com/in/danielsanchezcab/" },
  { name: "Rosalia Tapia", role: "Líder de Finanzas",       photo: LiderdeFinanzas,      linkedin: "https://www.linkedin.com/in/rosalia-victoria-tapia-ch%C3%A1vez-520a62369/" },
  { name: "Madeleine Darline", role: "Líder de Marketing",      photo: LiderdeMarketing,     linkedin: "https://www.linkedin.com/in/madeleinedarline/" },
  { name: "Marycielo Roca", role: "Líder de Talento Humano", photo: LiderdeTalentoHumano, linkedin: "https://www.linkedin.com/in/marycielo-roca-mendoza-administracion/" },
];

const getVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const BoardSection = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState<number>(getVisible);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const v = getVisible();
      setVisible(v);
      setCurrent((c) => Math.min(c, Math.max(0, members.length - v)));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = members.length - visible;

  const goTo = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const prev = useCallback(() => { if (current > 0) goTo(current - 1); }, [current, goTo]);
  const next = useCallback(() => { if (current < maxIndex) goTo(current + 1); }, [current, maxIndex, goTo]);

  return (
    <section id="junta" className="py-12 sm:py-16" style={{ background: "#F0FBFF" }}>
      <style>{`
        /* ── Fade puro: sin movimiento, solo aparece/desaparece suave ── */
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        .card-visible {
          animation: fadeIn 0.55s ease-in-out both;
        }
        .card-hidden {
          animation: fadeOut 0.3s ease-in-out both;
          pointer-events: none;
        }

        /* Hover suave */
        .board-card {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .board-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 28px rgba(41,10,100,0.22);
        }
        .card-img {
          transition: transform 0.4s ease-out;
        }
        .board-card:hover .card-img {
          transform: scale(1.04);
        }

        /* Dot animado */
        .dot-pill {
          transition: width 0.3s ease-out, background 0.25s ease-out;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-8 sm:mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white"
            style={{ background: "#FF610F" }}
          >
            CEPMI 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#200F38" }}>
            Junta <span style={{ color: "#3FC0F0" }}>Directiva</span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full" style={{ background: "#3FC0F0" }} />
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed px-2">
            Profesionales comprometidos con promover la excelencia en la gestión
            de proyectos en la región norte del país.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative flex items-center gap-2 sm:gap-3 max-w-5xl mx-auto">

          {/* Botón anterior */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-200 disabled:opacity-25 active:scale-90 hover:scale-110"
            style={{ background: "#290A64" }}
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block" />
          </button>

          {/* Grid */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {members.map((m, i) => {
                const isVisible = i >= current && i < current + visible;
                return (
                  <div
                    key={i}
                    className={isVisible ? "card-visible" : "card-hidden"}
                    style={{
                      display: isVisible ? "block" : "none",
                      animationDelay: isVisible ? `${(i - current) * 0.08}s` : "0s",
                    }}
                  >
                    <div
                      className="board-card rounded-xl overflow-hidden shadow-md"
                      style={{ background: "#290A64" }}
                    >
                      {/* Foto */}
                      <div
                        className="w-full overflow-hidden relative"
                        style={{
                          aspectRatio: "4/6.5",
                          background: "linear-gradient(180deg, #4F17A8 0%, #290A64 100%)",
                        }}
                      >
                        {m.photo ? (
                          <img
                            src={m.photo}
                            alt={m.name}
                            className="card-img w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-5xl font-bold text-white/30">
                              {m.role.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                          style={{ background: "linear-gradient(to top, #290A64, transparent)" }}
                        />
                      </div>

                      {/* Info */}
                      <div className="px-3 pb-4 pt-2 text-center">
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-1.5 border"
                          style={{ color: "#3FC0F0", borderColor: "#3FC0F0" }}
                        >
                          {m.role}
                        </span>
                        <h4 className="font-bold text-sm mb-2 text-white leading-tight">
                          {m.name}
                        </h4>
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-[#3FC0F0] transition-all duration-200"
                          aria-label={`LinkedIn de ${m.name}`}
                        >
                          <Linkedin size={12} />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            aria-label="Siguiente"
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-200 disabled:opacity-25 active:scale-90 hover:scale-110"
            style={{ background: "#290A64" }}
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={20} className="hidden sm:block" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a ${i + 1}`}
              className="dot-pill rounded-full"
              style={{
                width: i === current ? "22px" : "8px",
                height: "8px",
                background: i === current ? "#3FC0F0" : "#b0d8ec",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoardSection;