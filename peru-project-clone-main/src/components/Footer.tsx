import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-section-dark-foreground/10 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-section-dark-foreground/50 text-sm">
          © 2026 PMI Norte Perú Chapter. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/comunidadestudiantilpminorte/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-section-dark-foreground/50 hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61567366105780"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-section-dark-foreground/50 hover:text-primary transition-colors"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/comunidad-estudiantil-pmi-norte-per%C3%BA/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-section-dark-foreground/50 hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;