import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import contactImg from "@/assets/contact-team.jpg";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // 1. Capturamos los nuevos campos exactos
    const formData = new FormData(e.currentTarget);
    const nombres = formData.get("nombres") as string;
    const apellidos = formData.get("apellidos") as string;
    const correo = formData.get("correo") as string;
    const telefono = formData.get("telefono") as string;
    const organizacion = formData.get("organizacion") as string;

    try {
      // 2. Enviamos a Supabase respetando las tildes 
      const { error: supabaseError } = await supabase
        .from('asistentes_kickoff') 
        .insert([{ 
          nombres: nombres, 
          apellidos: apellidos, 
          email: correo, 
          telefono: telefono, 
          universidad_organizacion: organizacion 
        }]);

      if (supabaseError) {
        if (supabaseError.code === '23505' || supabaseError.message.includes('already exists')) {
          throw new Error("Este correo ya está registrado para el evento. ¡Te esperamos!");
        }
        throw new Error("Hubo un problema al conectar con la base de datos.");
      }

      setSubmitted(true);
    /* } catch (err: any) { "any (error previsto) ocurre porque le decimos que acepte todo,
                              y quiere que seamos mas estrictos, por ello verificamos el catch
                              por el nuevo que pusimos, que es mas estricto.
      console.error("Error al guardar:", err);
      setError(err.message || "Hubo un problema al enviar tu registro. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }*/
   } catch (err: unknown) {
      console.error("Error al guardar:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Hubo un problema al enviar tu registro. Intenta nuevamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contacto" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-section-dark-foreground">
          Registro al Evento
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Nuevos Inputs mapeados a la BD */}
            <div className="grid grid-cols-2 gap-4">
              <Input name="nombres" placeholder="Nombres" required className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 rounded-lg" />
              <Input name="apellidos" placeholder="Apellidos" required className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 rounded-lg" />
            </div>
            
            <Input name="correo" type="email" placeholder="Correo Electrónico" required className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 rounded-lg" />
            <Input name="telefono" type="tel" placeholder="Teléfono" required className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 rounded-lg" />
            <Input name="organizacion" placeholder="Universidad u Organización" required className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 rounded-lg" />

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            {submitted ? (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4">
                <p className="text-green-500 font-medium text-center">¡Registro exitoso! Nos vemos en el Kickoff.</p>
              </div>
            ) : (
              <Button type="submit" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 w-full mt-2">
                {isLoading ? "Procesando..." : "Registrarme"}
              </Button>
            )}
          </form>

          <div className="hidden lg:block">
            <img src={contactImg} alt="Equipo PMI Norte Perú" className="rounded-xl w-full object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;