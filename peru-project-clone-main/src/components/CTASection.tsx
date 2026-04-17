import mascota from "@/assets/ImgSeVoluntario.png";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Tarjeta principal */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #200F38 0%, #290A64 55%, #4F17A8 100%)" }}
        >
          {/* Círculos decorativos */}
          <div
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "#3FC0F0" }}
          />
          <div
            className="absolute -bottom-12 left-1/3 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: "#FF610F" }}
          />

          {/* León posicionado un poco más hacia el centro (right-4 o lg:right-12) */}
          <div className="hidden lg:block absolute right-4 lg:right-12 bottom-0 z-10" style={{ width: "240px" }}>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{ background: "#3FC0F0" }}
            />
            <img
              src={mascota}
              alt="Mascota PMI Norte Perú"
              className="relative z-10 w-full object-contain object-bottom drop-shadow-2xl"
              style={{ maxHeight: "320px" }}
            />
          </div>

          {/* Texto — Reducimos el padding derecho (lg:pr-40) para acercarlo a la imagen */}
          <div className="relative z-20 p-8 sm:p-10 lg:p-12 lg:pr-40 space-y-6">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm"
              style={{
                background: "rgba(255,97,15,0.15)",
                border: "1px solid rgba(255,97,15,0.4)",
                color: "#FF610F",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#FF610F" }}
              />
              PMI Norte Perú — CEPMI 2026
            </div>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              ¿Listo para el{" "}
              <span style={{ color: "#3FC0F0" }}>siguiente</span>{" "}
              proyecto?
            </h2>

            {/* Descripción */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Únete al PMI Norte Perú Chapter y forma parte de una comunidad
              que impulsa el crecimiento profesional, la innovación y el
              liderazgo en la gestión de proyectos en{" "}
              <span className="text-white font-semibold">
                Trujillo, Piura y Cajamarca.
              </span>
            </p>

            {/* Stats - AHORA SON 2 COLUMNAS (grid-cols-2) */}
            <div className="grid grid-cols-2 gap-4 pt-2 max-w-sm">
              {[
                { value: "3", label: "Ciudades" },
                { value: "Más de 50", label: "Voluntarios" }, // Dato actualizado
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center transition-transform hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  <p className="text-xl sm:text-2xl font-extrabold" style={{ color: "#3FC0F0" }}>
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Frase */}
            <div className="flex items-center gap-3 pt-2">
              <div
                className="h-px w-12 rounded-full"
                style={{ background: "rgba(63,192,240,0.5)" }}
              />
              <p className="text-white/50 text-sm italic font-light">
                "Transformamos ideas en proyectos que cambian el norte del Perú."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;