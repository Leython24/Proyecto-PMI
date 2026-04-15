import { Button } from "@/components/ui/button";

const VolunteerSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sé voluntario y <span className="text-gradient">deja huella!</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
          Forma parte activa del PMI Norte Perú Chapter como voluntario y contribuye al desarrollo de la comunidad profesional de gestión de proyectos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-3">
            Sé voluntario
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3">
            Habla con nosotros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
