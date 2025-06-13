
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    services: "Services",
    expertise: "Expertise", 
    testimonials: "Témoignages",
    contact: "Contact",
    contactUs: "Nous contacter",
    
    // Hero section
    expertConsulting: "Cabinet de Consulting Expert",
    heroTitle: "Transformez votre Qualité Logicielle",
    heroDescription: "QA Factory vous accompagne dans l'automatisation de vos tests et la conduite du changement par la qualité. Des ingénieurs experts à votre service pour des résultats mesurables.",
    discoverServices: "Découvrir nos services",
    requestAudit: "Demander un audit gratuit",
    
    // Stats
    completedProjects: "Projets réalisés",
    clientSatisfaction: "Satisfaction client",
    timeSaved: "Temps de test économisé",
    yearsExpertise: "Années d'expertise",
    
    // Services
    ourServices: "Nos Services",
    excellenceTitle: "Excellence en Automatisation et Qualité",
    excellenceDescription: "Des solutions sur-mesure pour optimiser vos processus de test et garantir la qualité de vos applications critiques.",
    
    // Footer
    footerDescription: "Qualité et Agilité - Votre partenaire de confiance pour l'automatisation des tests",
    allRightsReserved: "Tous droits réservés."
  },
  en: {
    // Navigation
    services: "Services",
    expertise: "Expertise",
    testimonials: "Testimonials", 
    contact: "Contact",
    contactUs: "Contact Us",
    
    // Hero section
    expertConsulting: "Expert Consulting Firm",
    heroTitle: "Transform your Software Quality",
    heroDescription: "QA Factory supports you in test automation and quality-driven change management. Expert engineers at your service for measurable results.",
    discoverServices: "Discover our services",
    requestAudit: "Request a free audit",
    
    // Stats
    completedProjects: "Completed Projects",
    clientSatisfaction: "Client Satisfaction",
    timeSaved: "Test Time Saved",
    yearsExpertise: "Years of Expertise",
    
    // Services
    ourServices: "Our Services",
    excellenceTitle: "Excellence in Automation and Quality",
    excellenceDescription: "Tailored solutions to optimize your testing processes and ensure the quality of your critical applications.",
    
    // Footer
    footerDescription: "Quality and Agility - Your trusted partner for test automation",
    allRightsReserved: "All rights reserved."
  },
  es: {
    // Navigation
    services: "Servicios",
    expertise: "Experiencia",
    testimonials: "Testimonios",
    contact: "Contacto", 
    contactUs: "Contáctanos",
    
    // Hero section
    expertConsulting: "Consultora Experta",
    heroTitle: "Transforme su Calidad de Software",
    heroDescription: "QA Factory le acompaña en la automatización de pruebas y la gestión del cambio orientada a la calidad. Ingenieros expertos a su servicio para resultados medibles.",
    discoverServices: "Descubrir nuestros servicios",
    requestAudit: "Solicitar una auditoría gratuita",
    
    // Stats
    completedProjects: "Proyectos Completados",
    clientSatisfaction: "Satisfacción del Cliente",
    timeSaved: "Tiempo de Prueba Ahorrado",
    yearsExpertise: "Años de Experiencia",
    
    // Services
    ourServices: "Nuestros Servicios",
    excellenceTitle: "Excelencia en Automatización y Calidad",
    excellenceDescription: "Soluciones a medida para optimizar sus procesos de prueba y garantizar la calidad de sus aplicaciones críticas.",
    
    // Footer
    footerDescription: "Calidad y Agilidad - Su socio de confianza para la automatización de pruebas",
    allRightsReserved: "Todos los derechos reservados."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
