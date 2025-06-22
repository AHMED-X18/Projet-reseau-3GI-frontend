'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function NotificationServicePage() {
  return (
    <>
      <Head>
        <title>API de Service de Notifications - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-purple-700 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faBell} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service de Notifications
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              API complète pour la gestion des notifications multicanales. Permet l&aposenvoi ciblé via email, SMS et notifications push, avec suivi en temps réel et personnalisation avancée des templates.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Email : Gestion des envois email.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>SMS : Diffusion de messages texte.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Push : Notifications mobiles.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Webhook : Configuration des callbacks.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Template : Gestion des modèles.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Planification : Planification des envois.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Logs : Consultation des historiques.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Blacklist : Gestion des opt-out.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Priorité : Système de priorités.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Pièces jointes : Gère les pièces jointes.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Suivi : Suivi des ouvertures/clics.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Fournisseur : Configuration des fournisseurs.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>Envois massifs : Envois massifs.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>WebSocket : Notifications en temps réel.</span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 03:05 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout de la prise en charge des notifications in-app personnalisées avec segmentation avancée.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation de la gestion des files d&aposattente pour réduire la latence des envois SMS de 40%.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de l&aposintégration WebSocket pour un suivi en temps réel plus fiable des notifications.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Notification+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-purple-700 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}