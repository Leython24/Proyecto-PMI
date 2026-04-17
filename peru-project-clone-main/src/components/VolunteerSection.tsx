import { Network, UserCog, GraduationCap, BookOpen } from "lucide-react";

import imgBeneficios from "@/assets/ImgBeneficios.jpg";

const VolunteerSection = () => {
  return (
    // Fondo con un tono súper sutil, casi blanco, para que las tarjetas blancas resalten
    <section className="py-20 bg-[#fdfcff]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Grid principal: 1 columna en celulares, 2 columnas en pantallas grandes (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Textos e Imagen */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-black text-[#200F38] leading-tight mb-4 tracking-tight">
              Beneficios de ser <br />
              <span className="text-[#3FC0F0]">PMI Student Member</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 max-w-md leading-relaxed">
              Accede a una red global de profesionales y recursos exclusivos que acelerarán tu carrera en todo el Norte del Perú.
            </p>

            {/* Tarjeta de Imagen */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl h-[280px] w-full group">
              {/* IMAGEN*/}
              <img 
                src={imgBeneficios} 
                alt="Networking" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Degradado oscuro en la base para leer el texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#200F38] via-[#200F38]/40 to-transparent" />
              
              {/* Textos sobre la imagen */}
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h4 className="text-white font-bold text-lg mb-1">Networking Macro-regional</h4>
                <p className="text-white/80 text-sm">Conecta con los líderes del norte hoy.</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjetas de Beneficios */}
          <div className="flex flex-col gap-5">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 flex gap-5 items-start">
              <div className="bg-[#3FC0F0]/15 p-3.5 rounded-2xl shrink-0 text-[#3FC0F0]">
                <Network size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#200F38] font-bold text-lg mb-2">Networking de Alto Impacto</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Acceso directo a mentores en Trujillo, Piura, Cajamarca e internacionales en diversas industrias.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 flex gap-5 items-start">
              <div className="bg-[#3FC0F0]/15 p-3.5 rounded-2xl shrink-0 text-[#3FC0F0]">
                <UserCog size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#200F38] font-bold text-lg mb-2">Desarrollo de Soft Skills</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Liderazgo, comunicación efectiva y resolución de conflictos en entornos reales de proyecto.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 flex gap-5 items-start">
              <div className="bg-[#3FC0F0]/15 p-3.5 rounded-2xl shrink-0 text-[#3FC0F0]">
                <GraduationCap size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#200F38] font-bold text-lg mb-2">Preparación para Certificaciones</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Descuentos exclusivos y grupos de estudio especializados para certificaciones CAPM® y PMP®.
                </p>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1 flex gap-5 items-start">
              <div className="bg-[#3FC0F0]/15 p-3.5 rounded-2xl shrink-0 text-[#3FC0F0]">
                <BookOpen size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[#200F38] font-bold text-lg mb-2">Recursos Exclusivos</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Acceso a la biblioteca digital premium de PMI, plantillas y herramientas globales.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;