import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Ingénieur en R&D",
      company: "Dioxygen Software",
      period: "Mars 2020 - Aujourd'hui",
      location: "38000 Grenoble",
      description: "Conception de logiciels web 3D innovants au sein d'une petite entreprise spécialisée en graphique.",
      achievements: [
        "Conception et développement d'un logiciel de CAO photonique complet pour LightSpring",
        "Visualisation 3D de modèles STL dans un environnement web",
        "Optimisation et export de circuits photoniques"
      ],
      technologies: ["TypeScript", "WebGL", "Three.js", "C++"]
    },
    {
      icon: GraduationCap,
      title: "Enseignant vacataire",
      company: "ENSIMAG/POLYTECH/UGA",
      period: "Septembre 2020 - Février 2024",
      location: "38400 Saint Martin d'Hères",
      description: "Enseignement en méthodes numériques et informatique théorique.",
      achievements: [
        "Méthodes numériques de base - 100h de travaux dirigés (1A ENSIMAG)",
        "Automates et Langages - 55h de travaux dirigés (L2 PEIP)"
      ],
      technologies: ["Pédagogie", "Méthodes numériques", "Automates", "Langages formels"]
    }
  ];

  const internships = [
    {
      title: "Analyse des conflits de mémoire dans les GPU",
      institution: "Université de Hawaii",
      period: "2018 (3 mois)",
      location: "États-Unis d'Amérique",
      description: "Analyse des conflits mémoires pour des algorithmes hautement parallélisables sur GPU.",
      supervisor: "Nodari Sitchinava",
      technologies: ["GPU", "CUDA", "Algorithmes parallèles", "Analyse de performance"]
    },
    {
      title: "Outils pour l'analyse de grands systèmes aléatoires",
      institution: "Laboratoire d'Informatique de Grenoble",
      period: "2017 (6 semaines)",
      location: "Grenoble",
      description: "Initiation à la recherche en systèmes aléatoires et analyse de performance.",
      supervisor: "Nicolas Gast",
      technologies: ["Systèmes aléatoires", "Modélisation", "Analyse statistique", "Python"]
    }
  ];

  // Skills et langues retirés selon la demande

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
              Expérience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mon parcours professionnel alliant recherche académique et développement industriel,
              avec une expertise en informatique graphique et fabrication numérique.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl font-semibold text-center mb-12">
              Expérience professionnelle
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const isDioxygen = exp.company === 'Dioxygen Software';

                const card = (
                  <Card key={index} className={`p-8 shadow-card border-border/50 transition-all duration-300 ${isDioxygen ? 'hover:shadow-elegant cursor-pointer' : 'hover:shadow-elegant'}`}>
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <exp.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h4 className="font-serif text-2xl font-semibold mb-1">{exp.title}</h4>
                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="text-right text-muted-foreground">
                            <p className="font-medium">{exp.period}</p>
                            <p className="text-sm">{exp.location}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        <ul className="space-y-2 mb-6">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <span className="text-primary mt-2">•</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );

                return isDioxygen ? (
                  <a
                    key={index}
                    href="https://www.dioxygen.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={index}>{card}</div>
                );
              })}
            </div>
          </div>

          {/* Internships */}
          <div className="mb-20">
            <h3 className="font-serif text-3xl font-semibold text-center mb-12">
              Stages de recherche
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <Card key={index} className="p-6 shadow-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-semibold mb-2">{internship.title}</h4>
                      <p className="text-primary font-medium">{internship.institution}</p>
                      <div className="text-sm text-muted-foreground mt-1">
                        <p>{internship.period} • {internship.location}</p>
                        <p>Superviseur : {internship.supervisor}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{internship.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Blocs Compétences/Langues supprimés */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;