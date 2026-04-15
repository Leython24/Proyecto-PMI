import eventImg from "@/assets/event-cajamarca.jpg";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const EventsSection = () => {
  return (
    <section id="eventos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Próximos <span className="text-gradient">eventos</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 text-lg">
          Participa en nuestros eventos, talleres y congresos, donde compartimos experiencias, conocimientos y buenas prácticas en dirección de proyectos.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["Todos", "Cajamarca", "Trujillo", "Piura", "Comunidad Estudiantil"].map((tag, i) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground border border-border hover:bg-primary/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Event card */}
        <div className="max-w-lg mx-auto bg-card rounded-xl overflow-hidden border border-border shadow-md">
          <div className="relative">
            <img src={eventImg} alt="KICK OFF" className="w-full h-56 object-cover" loading="lazy" width={640} height={512} />
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Calendar size={14} /> 18 Abril
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">KICK OFF</h3>
            <p className="text-muted-foreground mb-4">
              ¡Llegó el momento de liderar el cambio! Te invitamos al Kick Off Meeting 2026 de la Comunidad Estudiantil del PMI Norte Perú Chapter.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-full">Ver información</Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">Regístrate</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
