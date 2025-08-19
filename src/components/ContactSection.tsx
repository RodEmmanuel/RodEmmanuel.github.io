import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const contactEmails = [
    {
      icon: Mail,
      label: "Email",
      value: "emmanuel-rodriguez@laposte.net",
      href: "mailto:emmanuel-rodriguez@laposte.net"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
              Contactez-moi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intéressé par une collaboration, un projet ou simplement envie d'échanger ?
              N'hésitez pas à me contacter !
            </p>
            {/* Mailto only */}
            <div className="max-w-lg mx-auto">
              {contactEmails.map((item, index) => (
                <Card key={index} className="p-6 shadow-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{item.label}</h4>
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;