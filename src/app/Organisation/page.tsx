'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function OrganizationServicePage() {
  return (
    <>
      <Head>
        <title>API de Service d'Organisation - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-orange-500 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faSitemap} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service d'Organisation
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              API complète pour la gestion des organisations, équipes et projets. Permet la gestion des membres, la planification des tâches, et le suivi des calendriers avec des fonctionnalités avancées de collaboration.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Équipe : Gestion des membres d'équipe.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Projet : Gestion des projets et tâches.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Calendrier : Planification des événements.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Webhook : Configuration des notifications automatiques.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Modèle : Gestion des modèles de tâches.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Planification : Planification des réunions.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Logs : Consultation des historiques d'activités.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Permissions : Gestion des rôles et accès.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Priorité : Système de priorités pour les tâches.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Pièces jointes : Gère les documents joints aux projets.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Suivi : Suivi des progrès des projets.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Fournisseur : Configuration des outils externes.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>Gestion massive : Gestion massive des tâches.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>WebSocket : Notifications en temps réel.</span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 03:41 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout d'une fonctionnalité de tableau de bord personnalisé pour le suivi des projets par équipe.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de l'intégration avec des outils tiers pour une synchronisation automatique des calendriers.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation de la gestion des permissions pour une attribution plus rapide des rôles aux membres.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Organization+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-orange-500 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}