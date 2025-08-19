import { Button } from '@/components/ui/button';
import { LinkedinIcon, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left side */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-bold mb-2">Emmanuel Rodriguez</h3>
              <p className="text-muted-foreground">Docteur en informatique</p>
              <p className="text-sm text-muted-foreground mt-1">Grenoble, France</p>
            </div>

            {/* Center - Social Links */}
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <a href="mailto:emmanuel-rodriguez@laposte.net" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/emmanuel-rodriguez-121417227" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <a href="https://github.com/rodemmanuel" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Right side - Back to top */}
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Retour en haut
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Emmanuel Rodriguez. Tous droits réservés.</p>
            <p className="mt-1">Dernière mise à jour : Août 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;