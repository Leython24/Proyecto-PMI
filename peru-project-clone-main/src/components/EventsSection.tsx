import { useState } from "react";
import eventImg from "@/assets/kick-off-poster.jpeg"; 
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Presentation, FileText, X } from "lucide-react";

const EventsSection = () => {
  const [showModal, setShowModal] = useState(false);

  // 1. El filtro activo (por defecto "Todos")
  const [activeFilter, setActiveFilter] = useState("Todos");

  // 2. Nuestra "Base de datos" de eventos (Array)
  const eventosBD = [
    {
      id: 1,
      title: "KICK OFF",
      category: "Cajamarca",
      date: "18 Abril",
      image: eventImg
    }
    // se podrán agregar más eventos separándolos por comas aqui 
  ];

  // 3. La lógica de filtrado (Como un Query)
  const eventosFiltrados = eventosBD.filter(evento => 
    activeFilter === "Todos" || evento.category === activeFilter
  );

  const openGoogleForm = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepTLgwOvDN1gv6tlE-cXOOcRj4AwxS5bgN5cpD7jFzKGt2JA/viewform";
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="eventos" className="py-20 bg-muted relative">
      <div className="container mx-auto px-4">
        {/* Título*/}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#200F38]">
          Próximos <span className="text-[#FF610F]">eventos</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 text-lg">
          Participa en nuestros eventos, talleres y congresos, donde compartimos experiencias, conocimientos y buenas prácticas en dirección de proyectos.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["Todos", "Cajamarca", "Trujillo", "Piura", "Comunidad Estudiantil"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)} // Al hacer clic, actualiza el filtro
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === tag // Si el tag es el seleccionado, lo pintamos de naranja
                  ? "bg-[#FF610F] text-white shadow-md scale-105"
                  : "bg-white text-[#371075] border border-[#371075]/20 hover:bg-[#3FC0F0]/10 hover:border-[#3FC0F0]/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Tarjeta del Evento */}
        {/* Renderizado Dinámico de Eventos con Animación */}
        <div className="min-h-[500px]"> {/* Mantiene la altura para que la página no salte */}
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((evento) => (
              /* La clase animate-fade-in creará la transición suave al cambiar de filtro */
              <div key={evento.id} className="max-w-lg mx-auto bg-card rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                <div className="relative">
                  <img src={evento.image} alt={evento.title} className="w-full h-auto object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-[#3FC0F0] text-[#200F38] text-xs font-extrabold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md tracking-wide">
                    <Calendar size={14} /> {evento.date}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black mb-3 text-[#290A64]">{evento.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ¡Llegó el momento de liderar el cambio! Te invitamos al Kick Off Meeting 2026 de la Comunidad Estudiantil del PMI Norte Perú Chapter.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="rounded-full flex-1 border-[#4F17A8] text-[#4F17A8] hover:bg-[#4F17A8]/10 hover:text-[#371075] font-bold" 
                      onClick={() => setShowModal(true)}
                    >
                      Ver información
                    </Button>
                    <Button 
                      className="rounded-full flex-1 bg-[#4F17A8] text-white hover:bg-[#371075] shadow-md font-bold transition-colors" 
                      onClick={openGoogleForm}
                    >
                      Regístrate
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Mensaje cuando seleccionas Trujillo o Piura (Filtros vacíos) */
            <div className="text-center mt-20 animate-fade-in">
              <p className="text-xl text-gray-500 font-medium">Próximamente más eventos en {activeFilter}...</p>
            </div>
          )}
        </div>
      </div>

      
      {/* EL MODAL SUPERPUESTO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#200F38]/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/20">
            
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#FF610F] hover:bg-[#FF610F]/10 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Cabecera del Modal */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-black text-[#200F38] pr-8 uppercase tracking-tight">Kick Off Meeting 2026</h2>
            </div>

            <div className="w-full bg-[#f8f9fa] flex justify-center border-b border-gray-200 p-4">
               <img src={eventImg} alt="KICK OFF Banner" className="w-full max-h-[280px] object-contain rounded-lg shadow-sm" />
            </div>

            {/* Detalles */}
            <div className="p-6 space-y-4">
              
              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#3FC0F0]/30 transition-colors">
                <div className="p-2 bg-[#4F17A8]/10 rounded-lg">
                  <Calendar className="text-[#4F17A8]" size={22} />
                </div>
                <div>
                  <p className="font-bold text-[#200F38] text-sm uppercase tracking-wide">Fecha y Hora</p>
                  <p className="text-gray-600 mt-0.5">Sábado 18 de Abril, 2:00 pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#3FC0F0]/30 transition-colors">
                <div className="p-2 bg-[#4F17A8]/10 rounded-lg">
                  <MapPin className="text-[#4F17A8]" size={22} />
                </div>
                <div>
                  <p className="font-bold text-[#200F38] text-sm uppercase tracking-wide">Lugar</p>
                  <p className="text-gray-600 mt-0.5">CAJAMARCA - Colegio de Ingenieros</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#3FC0F0]/30 transition-colors">
                <div className="p-2 bg-[#4F17A8]/10 rounded-lg">
                  <Presentation className="text-[#4F17A8]" size={22} />
                </div>
                <div>
                  <p className="font-bold text-[#200F38] text-sm uppercase tracking-wide">Modalidad</p>
                  <p className="text-gray-600 mt-0.5">Presencial</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#3FC0F0]/30 transition-colors">
                <div className="p-2 bg-[#4F17A8]/10 rounded-lg">
                  <FileText className="text-[#4F17A8]" size={22} />
                </div>
                <div>
                  <p className="font-bold text-[#200F38] text-sm uppercase tracking-wide">Descripción</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1.5">
                    Iniciamos el año con una agenda de alto nivel diseñada para potenciar tu perfil profesional desde el primer día. Contaremos con un panel de expertos, un taller práctico y el lanzamiento del primer gran proyecto que ejecutará el CEPMI este año. ¡Ven y descubre cómo puedes ser protagonista de esta iniciativa!
                  </p>
                </div>
              </div>

            </div>

            {/* Pie del Modal */}
            <div className="p-6 border-t border-gray-100 flex justify-center bg-gray-50/50 rounded-b-3xl">
              <Button 
                onClick={openGoogleForm} 
                className="w-full max-w-md bg-[#FF610F] hover:bg-[#e0560d] hover:scale-[1.02] transition-all text-white py-6 rounded-full text-lg font-black shadow-lg shadow-[#FF610F]/30 uppercase tracking-wide"
              >
                Regístrate ahora
              </Button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;