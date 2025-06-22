'use client';

import Link from 'next/link';
import styles from './ApiCard.module.css';

export default function ApiCard({ title, description, link, icon }) {
  const getDetailLink = (title: string) => {
    return link; // Default to the original link
  };

  return (
    <div className={styles.apiCard}>
      <div className="flex items-center mb-3">
        <i className={`fas ${icon} text-2xl mr-3`} style={{ color: getIconColor(title) }}></i>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link href={getDetailLink(title)} className="text-blue-600 hover:underline">
        Voir détails <i className="fas fa-arrow-right ml-1"></i>
      </Link>
    </div>
  );
}

// Helper function to assign colors
function getIconColor(title: string) {
  const colorMap = {
    "Service d'Authentification": '#4B5EFC',
    "Service d'Acteurs Commerciaux": '#F59E0B',
    "Service de Localisation": '#10B981',
    "Service de Médias": '#EF4444',
    "Service de Notification": '#8B5CF6',
    "Service d'Organisation": '#F97316',
    "Service de Paiement": '#14B8A6',
    "Service de Ressources": '#6B7280',
    "Service de Chatbot": '#9333EA',
  };
  return colorMap[title] || '#6B7280';
}