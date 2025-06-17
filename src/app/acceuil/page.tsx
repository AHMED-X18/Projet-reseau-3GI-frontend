'use client';

import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Acceuil/Sidebar';
import Header from '@/components/Acceuil/Header';
import ApiCard from '@/components/Acceuil/ApiCard';
import Footer from '@/components/Acceuil/Footer';

interface User {
    name: string;
  }
  
  export default function HomePage() {
    const user: User = { name: 'John Doe' };
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
    const apis = [
      { title: "Service d'Authentification", description: "Gestion sécurisée d'utilisateurs avec JWT, OAuth2 et multi-facteurs.", link: "https://api.example.com/auth", icon: "fa-shield-alt" },
      { title: "Service d'Acteurs Commerciaux", description: "Commerce, fournisseurs et partenaires commerciaux.", link: "https://api.example.com/commercial-actors", icon: "fa-users" },
      { title: "Service de Localisation", description: "Géocodage, recherche d'adresses et calculs d'itinéraires précis.", link: "https://api.example.com/location", icon: "fa-map-marker-alt" },
      { title: "Service de Médias", description: "Stockage et diffusion de contenus multimédias (images, vidéos, documents).", link: "https://api.example.com/media", icon: "fa-image" },
      { title: "Service de Notification", description: "Envoi de notifications push, emails et SMS en temps réel.", link: "https://api.example.com/notifications", icon: "fa-bell" },
      { title: "Service d'Organisation", description: "Gestion des structures hiérarchiques et des équipes.", link: "https://api.example.com/organization", icon: "fa-sitemap" },
      { title: "Service de Paiement", description: "Transactions sécurisées et support pour cartes, virements et crypto.", link: "https://api.example.com/payment", icon: "fa-money-bill-wave" },
      { title: "Service de Ressources", description: "Gestion centralisée des ressources matérielles et logicielles.", link: "https://api.example.com/resources", icon: "fa-database" },
      { title: "Service de Chatbot", description: "Assistant conversationnel intelligent avec NLP et intégrations multi-canaux.", link: "https://api.example.com/chatbot", icon: "fa-comments" },
    ];
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <>
        <Head>
          <title>Yowyob API Center - API Hub</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>
        <Script src="https://cdn.tailwindcss.com"></Script>
  
        <div className="flex flex-col min-h-screen w-full relative">
          <div className="flex width-full">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 text-white bg-blue-600 rounded ml-2 mt-2 z-10"
            >
              <i className="fas fa-bars"></i>
            </button>
            <Sidebar user={user} isOpen={isSidebarOpen} />
            <main className={`${styles.mainContent} flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}>
              <Header />
              <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Bienvenue, {user.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {apis.map((api, index) => (
                    <ApiCard key={index} {...api} />
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Voir plus d'APIs
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
}