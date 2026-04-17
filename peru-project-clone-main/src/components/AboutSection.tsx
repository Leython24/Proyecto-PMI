import misionIcon from "@/assets/Icons/logo_misión.png";
import visionIcon from "@/assets/Icons/logo_visión.png";
import valoresIcon from "@/assets/Icons/logo_valores.png";
import mascota from "@/assets/ImgQuienesSomos.png";
import imagenQSM from "@/assets/ImagenQSM.png";

const values = [
  {
    title: "Misión",
    icon: misionIcon,
    description:
      "Fortalecer las competencias en dirección de proyectos de los Estudiantes del norte del Perú, promoviendo el liderazgo, la ética y la creación de valor a través de la aplicación de estándares y buenas prácticas del PMI.",
  },
  {
    title: "Visión",
    icon: visionIcon,
    description:
      "Ser el capítulo referente del norte del Perú en gestión de proyectos, reconocido por su impacto positivo en la comunidad y por fomentar una cultura de excelencia, innovación y colaboración.",
  },
  {
    title: "Valores",
    icon: valoresIcon,
    description: (
      <>
        <strong className="text-white">Excelencia:</strong> compromiso con la calidad y la mejora continua.{" "}
        <strong className="text-white">Integridad:</strong> actuar con ética y transparencia.{" "}
        <strong className="text-white">Colaboración:</strong> trabajo conjunto y aprendizaje compartido.
      </>
    ),
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: "#F8F9FB" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Encabezado ── */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white"
            style={{ background: "#FF610F" }}
          >
            CEPMI 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#200F38" }}>
            Quiénes <span style={{ color: "#3FC0F0" }}>Somos</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full" style={{ background: "#3FC0F0" }} />
        </div>

        {/* ── Tarjeta principal "Quiénes Somos" ── */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 sm:mb-14"
          style={{ background: "linear-gradient(135deg, #200F38 0%, #290A64 55%, #4F17A8 100%)" }}
        >
          {/* Círculos decorativos */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: "#3FC0F0" }}
          />
          <div
            className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "#FF610F" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_280px] items-stretch">

            {/* ── Imagen izquierda ── */}
            <div className="relative min-h-[260px] lg:min-h-[380px]">
              <img
                src={imagenQSM}
                alt="Quiénes Somos - PMI Norte Perú"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(41,10,100,0.0) 60%, rgba(41,10,100,0.95) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(41,10,100,0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2"
                  style={{
                    background: "rgba(63,192,240,0.2)",
                    color: "#3FC0F0",
                    border: "1px solid rgba(63,192,240,0.3)",
                  }}
                >
                  Macroregión Norte
                </span>
                <h3 className="text-xl sm:text-2xl text-white font-bold leading-tight drop-shadow-lg">
                  Talento regional con <br />
                  <span style={{ color: "#3FC0F0" }}>visión global.</span>
                </h3>
              </div>
            </div>

            {/* ── Texto central ── */}
            <div className="flex flex-col justify-center px-8 py-10 space-y-6 max-w-sm">

              {/* Descripción */}
              <p className="text-white/75 text-sm leading-relaxed">
                La <strong className="text-white">Comunidad Estudiantil de PMI Norte Perú</strong> es
                una organización unificada que integra el talento de{" "}
                <span style={{ color: "#3FC0F0" }} className="font-semibold">
                  Trujillo, Piura y Cajamarca.
                </span>{" "}
                Cultivamos la próxima generación de directores de proyectos
                profesionales en toda la macroregión norte.
              </p>

              {/* Stats - ACTUALIZADO */}
              <div className="space-y-3">
                {[
                  { value: "3", label: "Ciudades unidas" },
                  { value: "50+", label: "Voluntarios activos" }, // Cambiado a Voluntarios y eliminados los eventos
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <span translate="no" className="text-2xl font-extrabold min-w-[56px]" style={{ color: "#3FC0F0" }}>
                    {stat.value}
                    </span>
                    <div
                      className="h-px flex-1 rounded-full"
                      style={{ background: "rgba(63,192,240,0.2)" }}
                    />
                    <span className="text-white/60 text-xs text-right">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Testimonio — card blanca */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(63,192,240,0.20)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                <span
                  className="text-2xl font-black leading-none block -mb-1"
                  style={{ color: "#3FC0F0" }}
                >
                  "
                </span>
                <p className="text-gray-500 italic text-xs leading-relaxed mb-3">
                  PMI Norte me conectó con estudiantes de Trujillo y Piura para
                  potenciar mi primer proyecto social.
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: "#3FC0F0" }}
                  >
                    L
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#200F38" }}>
                      Estudiante del Norte
                    </p>
                    <p className="text-gray-400 text-xs">PMI Norte Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── León derecha ── */}
            <div className="hidden lg:flex items-end justify-center relative">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-2xl opacity-20 pointer-events-none"
                style={{ background: "#3FC0F0" }}
              />
              <img
                src={mascota}
                alt="Mascota PMI Norte Perú"
                className="relative z-10 object-contain object-bottom drop-shadow-2xl"
                style={{ height: "340px", width: "100%" }}
              />
            </div>

          </div>
        </div>

        {/* ── Cards Misión / Visión / Valores ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 shadow-lg group"
              style={{ background: "#290A64" }}
            >
              <div
                className="mb-4 sm:mb-5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl"
                style={{ background: "rgba(63,192,240,0.12)" }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="h-0.5 w-10 rounded-full mb-3" style={{ background: "#3FC0F0" }} />
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "#3FC0F0" }}>
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;