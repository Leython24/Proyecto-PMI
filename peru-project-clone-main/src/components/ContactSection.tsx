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

    const form = e.currentTarget;
    const formData = new FormData(form);
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
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

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
    <section id="contacto" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">

        {/* ── Título Actualizado y Motivador ── */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#200F38" }}
          >
            ¡Queremos contactarte!
          </h2>
          <p className="text-gray-500 text-lg">
            Déjanos tu información y da el primer paso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* ── Formulario ── */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <Button
              type="submit"
              disabled={isLoading}
              className="rounded-full px-8 w-full mt-2 font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#4F17A8" }}
            >
              {isLoading ? "Procesando..." : "Registrarme"}
            </Button>
          </form>

          {/* ── Imagen ── */}
          <div className="hidden lg:block w-full">
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

      {/* ── ALERTA FLOTANTE (ESTILO PEDIDOS YA) ── */}
      {submitted && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl shadow-2xl flex items-center gap-3 pr-8">
            <div className="bg-green-100 p-1.5 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-800 font-medium text-sm m-0">
              Gracias por tu interés en querer formar parte de CEPMI
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;