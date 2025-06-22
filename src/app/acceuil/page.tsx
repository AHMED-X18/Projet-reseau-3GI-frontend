'use client';

import Head from 'next/head';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Acceuil/Sidebar';
import Header from '@/components/Acceuil/Header';
import ApiCard from '@/components/Acceuil/ApiCard';


interface User {
  name: string;
}

export default function HomePage() {
  const user: User = { name: 'John Doe' };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Fermé par défaut sur mobile
  const [isMobile, setIsMobile] = useState(false);

  // Détection de la taille d'écran
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Sur desktop, sidebar ouverte par défaut
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const apis = [
    { title: "Service d'Authentification", description: "Gestion sécurisée d'utilisateurs avec JWT, OAuth2 et multi-facteurs.", link:"/authentification", icon: "fa-shield-alt" },
    { title: "Service d'Acteurs Commerciaux", description: "Commerce, fournisseurs et partenaires commerciaux.", link: "/Commerce", icon: "fa-users" },
    { title: "Service de Localisation", description: "Géocodage, recherche d'adresses et calculs d'itinéraires précis.", link: "/Localisation", icon: "fa-map-marker-alt" },
    { title: "Service de Médias", description: "Stockage et diffusion de contenus multimédias (images, vidéos, documents).", link: "/Media", icon: "fa-image" },
    { title: "Service de Notification", description: "Envoi de notifications push, emails et SMS en temps réel.", link: "Notification", icon: "fa-bell" },
    { title: "Service d'Organisation", description: "Gestion des structures hiérarchiques et des équipes.", link: "/Organisation", icon: "fa-sitemap" },
    { title: "Service de Paiement", description: "Transactions sécurisées et support pour cartes, virements et crypto.", link: "/Paiement", icon: "fa-money-bill-wave" },
    { title: "Service de Ressources", description: "Gestion centralisée des ressources matérielles et logicielles.", link: "/Ressource", icon: "fa-database" },
    { title: "Service de Chatbot", description: "Assistant conversationnel intelligent avec NLP et intégrations multi-canaux.", link: "/Chatbot", icon: "fa-robot" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fermer la sidebar quand on clique à l'extérieur sur mobile
  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>Yowyob API Center - API Hub</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>

      <div className="flex flex-col min-h-screen w-full relative">
        {/* Overlay pour mobile quand sidebar est ouverte */}
        {isMobile && isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeSidebar}
          />
        )}

        <div className="flex w-full relative">
          {/* Header mobile avec bouton menu */}
          <div className="md:hidden fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 z-30 flex items-center justify-between shadow-lg">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-blue-700 rounded transition-colors"
            >
              <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <h1 className="text-lg font-semibold truncate ml-4">Yowyob API Center</h1>
            <div className="w-10"></div> {/* Spacer pour centrer le titre */}
          </div>

          {/* Sidebar */}
          <Sidebar 
            user={user} 
            isOpen={isSidebarOpen} 
            onClose={closeSidebar}
            isMobile={isMobile}
          />

          {/* Contenu principal */}
          <main className={`
            flex-1 transition-all duration-300 ease-in-out
            ${isMobile ? 'pt-16' : ''} 
            ${!isMobile && isSidebarOpen ? 'ml-60' : 'ml-0'}
          `}>
            {/* Header desktop uniquement */}
            <div className="hidden md:block">
              <Header />
            </div>

            {/* Contenu */}
            <div className="max-w-7xl mx-auto p-4 md:p-6">
              <div className="mb-6">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                  Bienvenue, {user.name}
                </h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Découvrez nos services API pour vos projets
                </p>
              </div>

              {/* Grille d'APIs responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {apis.map((api, index) => (
                  <ApiCard 
                    key={index} 
                    {...api} 
                  />
                ))}
              </div>

              {/* Bouton "Voir plus" */}
              <div className="text-center mt-8">
                <button className="
                  px-6 py-3 bg-blue-600 text-white rounded-full 
                  hover:bg-blue-700 active:bg-blue-800
                  transition-colors duration-200
                  text-sm md:text-base font-medium
                  shadow-md hover:shadow-lg
                ">
                  Voir plus d' APIs
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}