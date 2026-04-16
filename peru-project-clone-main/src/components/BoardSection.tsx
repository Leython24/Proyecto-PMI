import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
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

const getVisible = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const BoardSection = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState<number>(getVisible);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const trackRef = useRef<HTMLDivElement>(null);

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
    (next: number, dir: "left" | "right") => {
      if (sliding) return;
      setDirection(dir);
      setSliding(true);
      setTimeout(() => {
        setCurrent(next);
        setSliding(false);
      }, 420);
    },
    [sliding]
  );

  const prev = useCallback(() => { if (current > 0) goTo(current - 1, "left"); }, [current, goTo]);
  const next = useCallback(() => { if (current < maxIndex) goTo(current + 1, "right"); }, [current, maxIndex, goTo]);

  return (
    <section id="junta" className="py-12 sm:py-16" style={{ background: "#F0FBFF" }}>
      <style>{`
        /* Animación tipo iPhone — spring easing */
        @keyframes iphoneSlideInRight {
          0%   { opacity: 0; transform: translateX(100%) scale(0.92); }
          60%  { opacity: 1; transform: translateX(-4%)  scale(1.01); }
          80%  { transform: translateX(2%)  scale(0.99); }
          100% { opacity: 1; transform: translateX(0)    scale(1);    }
        }
        @keyframes iphoneSlideInLeft {
          0%   { opacity: 0; transform: translateX(-100%) scale(0.92); }
          60%  { opacity: 1; transform: translateX(4%)    scale(1.01); }
          80%  { transform: translateX(-2%)  scale(0.99); }
          100% { opacity: 1; transform: translateX(0)     scale(1);    }
        }
        @keyframes iphoneSlideOutLeft {
          0%   { opacity: 1; transform: translateX(0)     scale(1);    }
          100% { opacity: 0; transform: translateX(-80%) scale(0.92); }
        }
        @keyframes iphoneSlideOutRight {
          0%   { opacity: 1; transform: translateX(0)    scale(1);    }
          100% { opacity: 0; transform: translateX(80%)  scale(0.92); }
        }

        .iphone-in-right  { animation: iphoneSlideInRight  0.42s cubic-bezier(0.34,1.56,0.64,1) both; }
        .iphone-in-left   { animation: iphoneSlideInLeft   0.42s cubic-bezier(0.34,1.56,0.64,1) both; }
        .iphone-out-left  { animation: iphoneSlideOutLeft  0.22s cubic-bezier(0.4,0,1,1) both; }
        .iphone-out-right { animation: iphoneSlideOutRight 0.22s cubic-bezier(0.4,0,1,1) both; }

        .board-card { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .board-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 40px rgba(41,10,100,0.25); }
        .board-card:hover .card-img { transform: scale(1.06); }
        .card-img { transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1); }

        .dot-pill { transition: width 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease; }
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

          {/* Track con overflow hidden */}
          <div className="flex-1 overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {members.map((m, i) => {
                const isNowVisible  = i >= current && i < current + visible;
                const wasPrevVisible = sliding && (
                  i >= (direction === "right" ? current - 1 : current + 1) &&
                  i <  (direction === "right" ? current - 1 + visible : current + 1 + visible)
                );

                let animClass = "";
                if (sliding && isNowVisible)  animClass = direction === "right" ? "iphone-in-right"  : "iphone-in-left";
                if (sliding && wasPrevVisible) animClass = direction === "right" ? "iphone-out-left" : "iphone-out-right";

                const show = isNowVisible || (sliding && wasPrevVisible);

                return (
                  <div
                    key={i}
                    className={animClass}
                    style={{
                      display: show ? "block" : "none",
                      animationDelay: isNowVisible ? `${(i - current) * 0.05}s` : "0s",
                    }}
                  >
                    {/* Card */}
                    <div
                      className="board-card rounded-xl overflow-hidden shadow-md"
                      style={{ background: "#290A64" }}
                    >
                      {/* Foto — más pequeña con aspect 4/5 */}
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
                        {/* Gradiente inferior */}
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
                          href="#"
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

        {/* Dots tipo iPhone */}
        <div className="flex justify-center items-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
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