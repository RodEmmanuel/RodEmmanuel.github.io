import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import inriaLogo from '@/assets/Inr_logo_rouge.svg.png';
import ensLogo from '@/assets/ens_lyon.png';

const AboutSection = () => {
  const timeline = [
    {
      year: "2020 - 2024",
      title: "Doctorat en Informatique",
      institution: "INRIA Grenoble",
      description: "Thèse : Modélisation directe et inverse de méta-matériaux découpés au laser"
    },
    {
      year: "2017 - 2020",
      title: "Licence et Master en Informatique",
      institution: "École Normale Supérieure de Lyon",
      description: "Informatique fondamentale"
    },
    {
      year: "2013 - 2017",
      title: "Classe préparatoire Physique Chimie",
      institution: "Lycée Champollion, Grenoble",
      description: "Formation en physique, chimie et mathématiques"
    },
    {
      year: "2013",
      title: "Baccalauréat Scientifique",
      institution: "Lycée J.B. Dumas, Alès",
      description: "Diplôme de fin d'études secondaires"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Meilleur article SPM 2022",
      description: "Computational Design of Laser-Cut Bending-Active Structures"
    },
    {
      icon: BookOpen,
      title: "Publications & Citations",
      description: "Articles dans Computer-Aided Design & ACM Fabrication"
    },
    {
      icon: GraduationCap,
      title: "Enseignement universitaire",
      description: "155h de TD à l'ENSIMAG et POLYTECH"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
              À propos de moi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Docteur en informatique et ingénieur R&D, je combine recherche académique
              et développement industriel dans le domaine de l'informatique graphique
              et de la fabrication numérique de structures complexes.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const link = index === 0
                ? "http://solidmodeling.org/spm-conferences/"
                : achievement.title.includes('Publications')
                  ? "https://scholar.google.com/citations?user=8-REZIQAAAAJ&hl=fr"
                  : undefined;

              const content = (
                <Card className="p-6 text-center shadow-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  {index === 0 ? (
                    <Award className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                  ) : (
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  )}
                  <h3 className="font-serif text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              );

              return link ? (
                <a key={index} href={link} target="_blank" rel="noreferrer" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl font-semibold text-center mb-12">
              Parcours académique
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-background"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="relative p-6 shadow-card border-border/50 hover:shadow-elegant transition-all duration-300">
                      {/* Logo en haut à droite */}
                      {item.institution.includes('INRIA') && (
                        <img src={inriaLogo} alt="INRIA" className="absolute top-3 right-3 h-12 md:h-14 w-auto opacity-95" />
                      )}
                      {item.institution.includes('École Normale Supérieure de Lyon') && (
                        <div className="absolute top-3 right-3 rounded-md bg-white p-1 border border-border/50 shadow-sm">
                          <img src={ensLogo} alt="ENS Lyon" className="h-10 md:h-12 w-auto opacity-100" />
                        </div>
                      )}

                      <div className="text-accent font-semibold mb-2">{item.year}</div>
                      <h4 className="font-serif text-xl font-semibold mb-2">{item.title}</h4>
                      <div className="text-primary font-medium mb-3">{item.institution}</div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;