import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, LinkedinIcon, Github } from 'lucide-react';
import profilePhoto from '@/assets/profile_medium.png';
import heroBg from '@/assets/woodCut4.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                <img
                  src={profilePhoto}
                  alt="Emmanuel Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full animate-pulse opacity-40"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emmanuel
              <span className="text-primary block">Rodriguez</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4">Docteur en informatique</p>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Spécialisé en informatique graphique et fabrication. Ingénieur R&D chez Dioxygen Software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('recherche')}
                className="font-medium shadow-elegant"
              >
                Découvrir mes expertises
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="font-medium"
              >
                Me contacter
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
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
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('apropos')}
            className="rounded-full"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;