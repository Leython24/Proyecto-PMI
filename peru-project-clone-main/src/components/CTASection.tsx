import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-section-dark-foreground">
          ¿Listo para el siguiente proyecto?
        </h2>
        <p className="text-section-dark-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
          Únete al PMI Norte Perú Chapter y forma parte de una comunidad que impulsa el crecimiento profesional, la innovación y el liderazgo en la gestión de proyectos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base">
            Hazte miembro
          </Button>
          <Button variant="outline" className="border-section-dark-foreground/30 text-section-dark-foreground hover:bg-section-dark-foreground/10 rounded-full px-8 py-3 text-base">
            Habla con nosotros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
