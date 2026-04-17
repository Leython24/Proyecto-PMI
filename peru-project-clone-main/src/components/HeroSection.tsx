import heroVideo from "@/assets/hero-bg.mp4"; // <-- 1. Importamos el video
import eventImg from "@/assets/event-cajamarca.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── 2. El Nuevo Fondo de Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradiente oscuro neutro (¡No lo tocamos porque está perfecto!) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to right, rgba(17, 16, 16, 0.88) 30%, rgba(10,10,10,0.65) 60%, rgba(10,10,10,0.30) 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">

        {/* ── LEFT ── */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">

          {/* Badge ciudades */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-md"
            style={{ background: "rgba(255,97,15,0.1)", border: "1px solid rgba(255,97,15,0.3)", color: "#FF610F" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "#FF610F" }} />
            <span className="text-xs font-bold tracking-widest uppercase">
              Trujillo • Piura • Cajamarca
            </span>
          </div>

          {/* Subtítulo celeste */}
          <p
            className="text-sm sm:text-base lg:text-xl font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase"
            style={{ color: "#3FC0F0" }}
          >
            PMI Norte Perú — Comunidad Estudiantil
          </p>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            ¡Maximizando el éxito de  {" "}
            <span style={{ color: "#3FC0F0" }}> los proyectos para elevar nuestro mundo!</span>{" "}
            
          </h1>

          {/* Frase */}
          <p
            className="text-sm sm:text-base italic font-medium border-l-4 pl-4"
            style={{ color: "rgba(255,255,255,0.75)", borderColor: "#3FC0F0" }}
          >
            "Transformamos ideas en proyectos que cambian el Norte del Perú."
          </p>

          {/* Descripción */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Somos el punto de encuentro para el talento estudiantil en
            Trujillo, Piura y Cajamarca. Llevamos la excelencia de{" "}
            <strong className="text-white">PMI</strong> a tu región y
            conectamos tu potencial con el mundo.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            
            <a href="#eventos">
      <Button
        variant="outline"
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-white bg-transparent hover:bg-white/10 transition-all"
        style={{ borderColor: "rgba(255,255,255,0.3)" }}
      >
        Ver Eventos
      </Button>
    </a>
          </div>
        </div>

        {/* ── RIGHT — Event card — solo desktop ── */}
        <div className="hidden lg:block relative group">
          <div
            className="absolute -inset-4 rounded-2xl blur-2xl transition-all duration-500"
            style={{ background: "rgba(63,192,240,0.15)" }}
          />
          <div
            className="relative backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl transition-transform duration-500 group-hover:rotate-1"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <img
              src={eventImg}
              alt="Comunidad Estudiantil PMI Norte Perú"
              className="rounded-xl w-full h-[400px] object-cover"
              loading="lazy"
              width={640}
              height={512}
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                Comunidad Estudiantil PMI Norte Perú
              </h3>
              <p className="text-white/60 text-sm mb-4">•Trujillo • Piura • Cajamarca •2026 </p>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;