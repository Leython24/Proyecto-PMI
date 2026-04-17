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

    const formData = new FormData(e.currentTarget);
    const nombres = formData.get("nombres") as string;
    const apellidos = formData.get("apellidos") as string;
    const correo = formData.get("correo") as string;
    const telefono = formData.get("telefono") as string;
    const organizacion = formData.get("organizacion") as string;

    try {
      const { error: supabaseError } = await supabase
        .from('asistentes_kickoff')
        .insert([{
          nombres,
          apellidos,
          email: correo,
          telefono,
          universidad_organizacion: organizacion,
        }]);

      if (supabaseError) {
        if (supabaseError.code === '23505' || supabaseError.message.includes('already exists')) {
          throw new Error("Este correo ya está registrado para el evento. ¡Te esperamos!");
        }
        throw new Error("Hubo un problema al conectar con la base de datos.");
      }

      setSubmitted(true);
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* ── Título Actualizado ── */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: "#200F38" }}
        >
          Contáctanos
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* ── Formulario ── */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <Input
                name="nombres"
                placeholder="Nombres"
                required
                className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg"
              />
              <Input
                name="apellidos"
                placeholder="Apellidos"
                required
                className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg"
              />
            </div>

            <Input
              name="correo"
              type="email"
              placeholder="Correo Electrónico"
              required
              className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg"
            />
            <Input
              name="telefono"
              type="tel"
              placeholder="Teléfono"
              required
              className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg"
            />
            <Input
              name="organizacion"
              placeholder="Universidad u Organización"
              required
              className="bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 rounded-lg"
            />

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            {submitted ? (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4">
                {/* ── Mensaje de Éxito Actualizado ── */}
                <p className="text-green-600 font-medium text-center">
                  Gracias por tu interés en querer formar parte de CEPMI
                </p>
              </div>
            ) : (
              <Button
                type="submit"
                disabled={isLoading}
                className="rounded-full px-8 w-full mt-2 font-bold text-white"
                style={{ background: "#4F17A8" }}
              >
                {isLoading ? "Procesando..." : "Registrarme"}
              </Button>
            )}
          </form>

          {/* ── Imagen ── */}
          <div className="hidden lg:block">
            <img
              src={contactImg}
              alt="Equipo PMI Norte Perú"
              className="rounded-xl w-full object-cover shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;