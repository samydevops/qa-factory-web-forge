import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Zap, Target, ArrowRight, Mail, Phone, MapPin, Award, TrendingUp, Shield } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Automatisation des Tests",
      description: "Conception et mise en place de frameworks d'automatisation robustes pour accélérer vos cycles de développement.",
      benefits: ["Réduction des délais", "Qualité optimisée", "ROI mesurable"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Conduite du Changement",
      description: "Accompagnement dans la transformation de vos processus qualité avec une approche agile et pragmatique.",
      benefits: ["Adoption facilitée", "Formation équipes", "Méthodologies éprouvées"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Audit Qualité",
      description: "Évaluation complète de vos processus actuels et recommandations personnalisées pour l'amélioration continue.",
      benefits: ["Diagnostic précis", "Plan d'action", "Suivi performance"]
    }
  ];

  const testimonials = [
    {
      text: "QA Factory a transformé notre approche de la qualité. Leur expertise en automatisation nous a fait gagner 60% de temps sur nos tests.",
      author: "Marie Dubois",
      role: "CTO, TechCorp",
      company: "Fortune 500"
    },
    {
      text: "L'accompagnement de QA Factory dans notre transformation agile a été remarquable. Des résultats concrets dès les premières semaines.",
      author: "Pierre Martin",
      role: "Directeur IT, InnovSoft",
      company: "Scale-up"
    },
    {
      text: "Leur approche pragmatique et leur expertise technique font la différence. Un partenaire de confiance pour tous nos projets qualité.",
      author: "Sophie Laurent",
      role: "Head of Quality, DataFlow",
      company: "Entreprise"
    }
  ];

  const stats = [
    { number: "100+", label: t("completedProjects") },
    { number: "95%", label: t("clientSatisfaction") },
    { number: "60%", label: t("timeSaved") },
    { number: "15+", label: t("yearsExpertise") }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold">QA Factory</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{t("services")}</a>
              <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">{t("expertise")}</a>
              <a href="#temoignages" className="text-muted-foreground hover:text-primary transition-colors">{t("testimonials")}</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t("contact")}</a>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
              <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80">
                {t("contactUs")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {t("expertConsulting")}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {t("heroTitle").split(" ").slice(0, 2).join(" ")}{' '}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {t("heroTitle").split(" ").slice(2).join(" ")}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("heroDescription")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80">
                  {t("discoverServices")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  {t("requestAudit")}
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
                alt="Développement et automatisation de tests"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">{t("ourServices")}</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("excellenceTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("excellenceDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Notre Expertise</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Des Ingénieurs Experts à Votre Service
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fondée par des ingénieurs passionnés, QA Factory s'appuie sur des années d'expérience 
                pour vous accompagner dans vos défis les plus complexes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Équipe d'Experts</h3>
                    <p className="text-muted-foreground">
                      Ingénieurs certifiés avec une expertise approfondie en automatisation et méthodologies agiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Innovation Continue</h3>
                    <p className="text-muted-foreground">
                      Veille technologique constante et adoption des meilleures pratiques du marché.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Résultats Prouvés</h3>
                    <p className="text-muted-foreground">
                      Track record démontré avec des clients de tous secteurs et toutes tailles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=center"
                alt="Travail d'équipe"
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=300&fit=crop&crop=center"
                alt="Code et développement"
                className="rounded-2xl shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&crop=center"
                alt="Analyse de données"
                className="rounded-2xl shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=center"
                alt="Développement logiciel"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ce que Disent Nos Clients
            </h2>
            <p className="text-xl text-muted-foreground">
              La satisfaction de nos clients est notre meilleure référence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="secondary" className="mb-4">Contact</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prêt à Transformer Votre Qualité ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contactez-nous pour discuter de vos défis et découvrir comment 
                QA Factory peut vous accompagner dans votre transformation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">contact@qafactory.fr</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <div className="text-muted-foreground">Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Demandez une Mission</CardTitle>
                <CardDescription>
                  Parlez-nous de votre projet et obtenez un devis personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nom *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Entreprise</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet et vos besoins..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80">
                    Envoyer la Demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold">QA Factory</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t("footerDescription")}
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 QA Factory. {t("allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
