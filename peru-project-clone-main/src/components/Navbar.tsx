import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/LogoPMI.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Eventos", href: "#eventos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Registro", href: "#registro" },
];

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── TOP BAR — blanco ── */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">

         {/* Iconos sociales — negros */}
<div className="flex items-center gap-4">
  <a
    href="https://www.instagram.com/comunidadestudiantilpminorte/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-black hover:text-[#4F17A8] transition-colors"
  >
    <InstagramIcon />
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=61567366105780"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-black hover:text-[#4F17A8] transition-colors"
  >
    <FacebookIcon />
  </a>
  <a
    href="https://www.linkedin.com/company/comunidad-estudiantil-pmi-norte-per%C3%BA/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-black hover:text-[#4F17A8] transition-colors"
  >
    <LinkedinIcon />
  </a>
</div>

          {/* Texto derecha */}
          <div className="hidden md:flex items-center gap-3 text-xs text-gray-600">
            <span>informes@pminorteperu.org</span>
            <span className="text-gray-300">|</span>
            <a href="#contacto"
              className="text-[#3FC0F0] hover:text-[#4F17A8] transition-colors font-semibold">
              Contáctanos
            </a>
            <span className="text-gray-300">|</span>
            
          </div>
        </div>
      </div>

      {/* ── MAIN NAV — morado ── */}
      <nav style={{ background: "#4F17A8" }} className="shadow-lg ">
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo — fondo igual al nav para fusionarse */}
          <a href="#inicio" className="flex items-center gap-4 group">
            <div
              className="flex items-center"
              style={{ background: "#4F17A8" }}
            >
              <img
                src={logo}
                alt="PMI Norte Perú"
                className="h-14 w-auto object-contain"
              />
            </div>

          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white hover:text-[#3FC0F0] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="rounded-full px-7 py-2 font-bold text-sm shadow-lg hover:opacity-90 transition-all"
              style={{ background: "#FF610F", color: "#200F38" }}
            >
              Únete
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white hover:text-[#3FC0F0] transition-colors mr-4"
            aria-label="Abrir menú"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {open && (
          <div
            style={{ background: "#290A64" }}
            className="lg:hidden border-t border-white/10 pb-6 px-4"
          >
            {/* Logo mobile */}
            <div className="py-4 flex items-center gap-3 border-b border-white/10 mb-2">
              <div style={{ background: "#290A64" }}>
                <img
                  src={logo}
                  alt="PMI Norte Perú"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-black text-white">PMI</span>
                  <span className="text-lg font-black" style={{ color: "#3FC0F0" }}>
                    Norte Perú
                  </span>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                  Student Club
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white font-semibold hover:text-[#3FC0F0] transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}

            <Button
              className="mt-4 w-full rounded-full font-bold"
              style={{ background: "#3FC0F0", color: "#200F38" }}
            >
              Únete
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;