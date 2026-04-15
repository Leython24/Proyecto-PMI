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
      "Fortalecer las competencias en dirección de proyectos de los profesionales del norte del Perú, promoviendo el liderazgo, la ética y la creación de valor a través de la aplicación de estándares y buenas prácticas del PMI.",
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
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Layout: Imagen izquierda + León con cartel derecha ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* ── Columna izquierda: foto grupal ── */}
          <div className="relative pb-10">
            <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src={imagenQSM}
                alt="Quiénes Somos - PMI Norte Perú"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(41,10,100,0.75) 0%, rgba(41,10,100,0.15) 60%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-5 sm:p-8">
                <h2 className="text-xl sm:text-2xl text-white font-bold leading-tight drop-shadow-lg">
                  Talento regional con <br />
                  <span style={{ color: "#3FC0F0" }}>visión global.</span>
                </h2>
              </div>
            </div>

            {/* Card testimonio */}
            <div className="absolute -bottom-2 right-0 sm:-bottom-6 sm:right-2 max-w-[200px] sm:max-w-[260px] bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-gray-600 italic text-xs leading-relaxed">
                "PMI Norte me conectó con estudiantes de Trujillo y Piura para
                potenciar mi primer proyecto social."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: "#3FC0F0" }}
                >
                  L
                </div>
                <p className="font-bold text-xs" style={{ color: "#200F38" }}>
                  — Estudiante del Norte
                </p>
              </div>
            </div>
          </div>

          {/* ── Columna derecha: León con cartel como imagen completa ── */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={mascota}
              alt="Mascota PMI Norte Perú sosteniendo cartel ¿Quiénes Somos?"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: "600px" }}
            />
          </div>

        </div>

        {/* ── Cards Misión / Visión / Valores ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 shadow-lg"
              style={{ background: "#290A64" }}
            >
              <div className="mb-4 sm:mb-5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;