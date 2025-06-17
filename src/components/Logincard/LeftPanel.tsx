'use client';

import styles from '@/app/login/style.module.css';
import { FaCode, FaBolt, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function LeftPanel() {
  return (
    <div className={`flex md:flex ${styles.gradientBg} text-white p-10 flex flex-col justify-center w-1/2 ${styles.leftPanel}`}>
      <div className="${styles.featureIcon} w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6 mx-auto">
        <FaCode className="text-blue-500 text-2xl" />
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">Bienvenue sur Yowyob API Center</h2>
      <p className="text-lg text-center mb-8 opacity-90">Votre portail centralisé pour toutes vos intégrations API</p>

      <div className="features space-y-4">
        <div className="flex items-center">
          <div className={`${styles.featureIcon} w-10 h-10 rounded-full mr-4`}>
            <FaBolt className="text-white text-xl" />
          </div>
          <p>Accès rapide à 100+ APIs</p>
        </div>

        <div className="flex items-center">
          <div className={`${styles.featureIcon} w-10 h-10 rounded-full mr-4`}>
            <FaShieldAlt className="text-white text-xl" />
          </div>
          <p>Sécurité de niveau entreprise</p>
        </div>

        <div className="flex items-center">
          <div className={`${styles.featureIcon} w-10 h-10 rounded-full mr-4`}>
            <FaChartLine className="text-white text-xl" />
          </div>
          <p>Analyse des performances en temps réel</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-80">
        <p>
          Besoin d'aide ? <a href="#" className="underline">Contactez notre équipe</a>
        </p>
      </div>
    </div>
  );
}