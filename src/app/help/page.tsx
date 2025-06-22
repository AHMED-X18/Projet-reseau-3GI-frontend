'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  LifeBuoy, 
  Shield, 
  Rocket, 
  Database, 
  Lock, 
  BookOpen, 
  UserPlus, 
  LogIn, 
  Search, 
  Code, 
  Plus, 
  Headphones, 
  MessageCircle, 
  Clock, 
  Mail, 
  ArrowRight, 
  Copyright,
  Twitter,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';

const AidePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Enhanced animations and interactions
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.premium-card, .feature-card').forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px) scale(0.95)';
      (el as HTMLElement).style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Centralisation Intelligente',
      description: 'Accédez à toutes vos APIs depuis une interface unifiée et intuitive.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Sécurité Avancée',
      description: 'Protection de niveau entreprise avec authentification multi-facteurs.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Documentation Complète',
      description: 'Guides détaillés et interactifs via notre interface Swagger.',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <UserPlus className="w-6 h-6" />,
      title: 'Créez Votre Compte',
      description: 'Rejoignez notre communauté exclusive en vous inscrivant via "Mon Profil". Bénéficiez d\'un accès personnalisé à toutes nos ressources premium.'
    },
    {
      number: 2,
      icon: <LogIn className="w-6 h-6" />,
      title: 'Connexion Sécurisée',
      description: 'Accédez à votre tableau de bord personnalisé avec vos identifiants sécurisés. Votre espace de travail vous attend.'
    },
    {
      number: 3,
      icon: <Search className="w-6 h-6" />,
      title: 'Explorez et Découvrez',
      description: 'Naviguez parmi nos APIs organisées par catégories ou utilisez notre moteur de recherche intelligent pour trouver exactement ce dont vous avez besoin.'
    },
    {
      number: 4,
      icon: <Code className="w-6 h-6" />,
      title: 'Intégrez et Innovez',
      description: 'Implémentez facilement nos APIs dans vos projets grâce à notre documentation interactive et nos exemples de code prêts à l\'emploi.'
    }
  ];

  const supportFeatures = [
    {
      icon: <Plus className="w-8 h-8" />,
      title: 'Nouvelles APIs',
      description: 'Découvrez régulièrement de nouvelles APIs ajoutées à notre catalogue en constante évolution.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Support Expert',
      description: 'Notre équipe d\'experts est disponible 24/7 pour vous accompagner dans tous vos projets.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Communication Directe',
      description: 'Échangez directement avec notre équipe pour obtenir des réponses personnalisées.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Enhanced Back Button */}
        <Link href="/acceuil">
        <button className="flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-all duration-300 hover:transform hover:-translate-x-1">
          <ArrowLeft className="mr-3 w-5 h-5" /> 
          <span className="text-lg">Retour à l'accueil</span>
        </button>
        </Link>
        {/* Hero Section */}
        <motion.div 
          className="text-white p-12 rounded-3xl shadow-2xl mb-10 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'shimmer 4s ease-in-out infinite'
            }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="inline-block p-4 bg-white bg-opacity-10 rounded-full mb-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)',
                animation: 'pulse 2s infinite'
              }}
            >
              <LifeBuoy className="w-16 h-16 text-blue-500" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Centre d'Aide</h1>
            <p className="text-xl opacity-90 mb-6">YOWYOB API Center</p>
            <div className="inline-flex items-center bg-white bg-opacity-15 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="font-medium text-blue-500">Support Premium 24/7</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="p-10 rounded-3xl shadow-xl"
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* About Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>À Propos de Notre Plateforme</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-10 border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Plateforme Révolutionnaire</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Yowyob API Center est votre gateway vers l'excellence technologique. Notre plateforme centralisée offre un accès sécurisé à un écosystème complet d'APIs, conçu pour propulser vos projets vers de nouveaux sommets d'innovation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl text-center group transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.08)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Guide de Démarrage</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-8 rounded-2xl transition-all duration-400 hover:transform hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-8 transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
                      boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                    }}
                  >
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center">
                      <span className="text-blue-600 mr-3">{step.icon}</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Support & Mises à Jour</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-10 border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-blue-900">Dernière mise à jour</p>
                  <p className="text-blue-700">12:12 AM WAT, Vendredi 20 Juin 2025</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl text-center group transition-all duration-400 hover:transform hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.08)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div 
            className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Headphones className="w-16 h-16 text-blue-600 mx-auto" />
              </motion.div>
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Besoin d'Assistance ?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans votre parcours d'intégration.
            </p>
            <button 
              className="inline-flex items-center px-10 py-4 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.6)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.4)';
              }}
            >
              <Mail className="w-5 h-5 mr-3" />
              Contacter le Support
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.footer 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="p-8 rounded-2xl inline-block"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <Copyright className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">2025 Yowyob API Center. Tous droits réservés.</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-115 hover:rotate-5">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-115 hover:rotate-5">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-115 hover:rotate-5">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-115 hover:rotate-5">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.footer>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
      `}</style>
    </div>
  );
};

export default AidePage;