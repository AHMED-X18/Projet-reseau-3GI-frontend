
import {
    Lock,
    DollarSign,
    MapPin,
    Bell,
    CreditCard,
    Shield,
    ChartLine,
    ArrowRight,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Github
  } from "lucide-react";
  import HeroSection from "@/components/home/HeroSection";
  import ApiProductsSection from "@/components/home/ApiProductSection";
  import TestimonialsSection from "@/components/home/TestimonialSection";
  import FeaturesSection from "@/components/home/FeatureSection";
  import CallToActionSection from "@/components/home/CallToActionSection";
  import SocialMediaSection from "@/components/home/SocialMediaSection";
  import Footer from "@/components/home/Footer";
  import { ApiProduct } from "@/components/home/ApiProductCard";
  import { Testimonial } from "@/components/home/TestimonialCard";
  import { Feature } from "@/components/home/FeatureCard";
  import { SocialLink } from "@/components/home/SocialMediaSection";
  
  const apiProducts: ApiProduct[] = [
    {
      id: 1,
      name: "API d'authentification",
      category: "Sécurité",
      description: "Elle fournit un cadre complet pour gérer l'accès et la sécurité des utilisateurs et des ressources d'une application.",
      icon: <Lock className="h-6 w-6 text-purple-600" />,
      iconBgColor: "bg-purple-100",
      features: ["Rapide", "Sécurisé", "Verifié"]
    },
    {
      id: 2,
      name: "API de service d'acteur commercial",
      category: "Commerce",
      description: "Elle permet d'interagir avec plus acteurs commerciaux.",
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      iconBgColor: "bg-blue-100",
      features: ["Finance", "Intégrité", "Rentabilité"]
    },
    {
      id: 3,
      name: "API Cartographie",
      category: "Géolocalisation",
      description: "Services de cartographie, géocodage, calcul d'itinéraires et points d'intérêt.",
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      iconBgColor: "bg-green-100",
      features: ["Haute précision", "Multi-couches", "Verifié"]
    },
    {
      id: 4,
      name: "API Notifications",
      category: "Environnement",
      description: "Signale les emails, messages, appels, et bien d'autres.",
      icon: <Bell className="h-6 w-6 text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      features: ["Temps réel", "Global", "Verifié"]
    },
    {
      id: 5,
      name: "API Paiement",
      category: "Transaction",
      description: "Solution de paiement sécurisée avec support pour cartes, virements et portefeuilles électroniques.",
      icon: <CreditCard className="h-6 w-6 text-red-600" />,
      iconBgColor: "bg-red-100",
      features: ["Sécurisé", "Multi-devises", "Verifié"]
    }
  ];
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Flora ESSONO",
      role: "Développeuse Fullstack",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      stars: 5,
      text: "L'API financière a révolutionné notre application. Les données sont toujours à jour et l'intégration a été incroyablement simple grâce à la documentation claire."
    },
    {
      id: 2,
      name: "Hanniel ATCHINE",
      role: "CTO, Startup Tech",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      stars: 4.5,
      text: "Nous utilisons plusieurs APIs de cette plateforme. La gestion centralisée des clés API nous fait gagner un temps précieux et réduit la complexité de notre infrastructure."
    },
    {
      id: 3,
      name: "Ahmed Jalil",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      stars: 5,
      text: "L'API météo nous permet d'offrir des fonctionnalités innovantes à nos utilisateurs. La fiabilité est exceptionnelle et le support technique réactif."
    }
  ];
  
  const features: Feature[] = [
    {
      id: 1,
      title: "Intégration rapide",
      description: "Documentation claire et SDKs pour tous les langages populaires. Intégrez nos APIs en quelques minutes.",
      icon: <ArrowRight className="h-6 w-6 text-white" />
    },
    {
      id: 2,
      title: "Sécurité renforcée",
      description: "Authentification OAuth2, chiffrement SSL et monitoring 24/7 pour protéger vos données.",
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      id: 3,
      title: "Analyses avancées",
      description: "Tableau de bord complet pour suivre l'utilisation de vos APIs et optimiser vos coûts.",
      icon: <ChartLine className="h-6 w-6 text-white" />
    }
  ];
  
  const socialLinks: SocialLink[] = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, hoverColor: "hover:bg-blue-400" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, hoverColor: "hover:bg-blue-600" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, hoverColor: "hover:bg-pink-500" },
    { name: "Youtube", icon: <Youtube className="h-5 w-5" />, hoverColor: "hover:bg-red-600" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, hoverColor: "hover:bg-blue-500" },
    { name: "Github", icon: <Github className="h-5 w-5" />, hoverColor: "hover:bg-gray-600" }
  ];
  
  const Index = () => {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <HeroSection />
        
        <ApiProductsSection products={apiProducts} />
        
        <div className="container mx-auto px-4">
          <TestimonialsSection testimonials={testimonials} />
          
          <FeaturesSection features={features} />
          
          <CallToActionSection />
          
          <SocialMediaSection socialLinks={socialLinks} />
        </div>
        
        <Footer />
      </div>
    );
  };
  
  export default Index;