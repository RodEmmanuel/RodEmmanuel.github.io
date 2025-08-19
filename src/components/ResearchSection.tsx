import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Eye, MonitorCog, Tangent } from 'lucide-react';
import researchBg from '@/assets/research-bg.jpg';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: MonitorCog,
      title: "Optimisation de méta-matériaux",
      description: "Modélisation directe et inverse de structures flexibles obtenues par découpe laser",
      technologies: ["Laser Cutting", "Material Modeling", "Inverse Design", "Computational Geometry"]
    },
    {
      icon: Cpu,
      title: "CAO Photonique",
      description: "Développement de logiciels de conception pour circuits photoniques chez LightSpring",
      technologies: ["Photonic Design", "Web CAD", "Circuit Optimization", "3D Visualization"]
    },
    {
      icon: Eye,
      title: "Visualisation 3D Web",
      description: "Création d'environnements 3D interactifs pour la visualisation de modèles STL",
      technologies: ["WebGL", "Three.js", "STL Processing", "3D Graphics"]
    },
    {
      icon: Tangent,
      title: "Simulation Physique",
      description: "Algorithmes de simulation pour prédire le comportement de structures 2D et 3D",
      technologies: ["FEM", "Physics Simulation", "GPU Computing", "Optimization"]
    }
  ];

  const publications = [
    {
      title: "Computational design of laser-cut bending-active structures",
      journal: "Computer-Aided Design",
      year: "2022",
      impact: "11 citations",
      status: "published",
      authors: "E Rodriguez, GP Bonneau, S Hahmann, M Skouras",
      url: "https://inria.hal.science/hal-03687416/file/paper.pdf"
    },
    {
      title: "Designing Bending-Active Freeform Surfaces",
      journal: "ACM Symposium on Computational Fabrication",
      year: "2024",
      impact: "Récente publication",
      status: "published",
      authors: "E Rodriguez, GP Bonneau, S Hahmann, M Skouras",
      url: "https://inria.hal.science/hal-04661276v1/document"
    }
  ];

  return (
    <section id="recherche" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img src={researchBg} alt="Research background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-section opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
              Domaines d'expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mon expertise se situe à l'intersection de l'informatique graphique et de la
              fabrication numérique, avec un focus sur la conception automatisée de structures en découpe laser et impression 3D.
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {researchAreas.map((area, index) => {
              const link = area.title === 'Visualisation 3D Web' ? 'https://pretty-stl-viewer.com/' : undefined;

              const card = (
                <Card key={index} className={`p-8 shadow-card border-border/50 transition-all duration-300 group ${link ? 'hover:shadow-elegant cursor-pointer' : 'hover:shadow-elegant'}`}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-3">{area.title}</h3>
                      <p className="text-muted-foreground mb-4">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );

              return link ? (
                <a key={index} href={link} target="_blank" rel="noreferrer" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                  {card}
                </a>
              ) : (
                <div key={index}>{card}</div>
              );
            })}
          </div>

          {/* Recent Publications */}
          <div>
            <h3 className="font-serif text-3xl font-semibold text-center mb-12">
              Publications
            </h3>

            <div className="space-y-6">
              {publications.map((pub, index) => {
                const card = (
                  <Card key={index} className="p-6 shadow-card border-border/50 hover:shadow-elegant transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-serif text-lg font-semibold mb-2">{pub.title}</h4>
                        <div className="text-sm text-muted-foreground mb-2">{pub.authors}</div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{pub.journal}</span>
                          <span>{pub.year}</span>
                          <span>{pub.impact}</span>
                        </div>
                      </div>
                      <Badge
                        variant="default"
                        className="w-fit"
                      >
                        Publié
                      </Badge>
                    </div>
                  </Card>
                );

                return pub.url ? (
                  <a key={index} href={pub.url} target="_blank" rel="noreferrer" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                    {card}
                  </a>
                ) : (
                  <div key={index}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;