'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ChatbotServicePage() {
  return (
    <>
      <Head>
        <title>API de Service de Chatbot - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-purple-700 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faRobot} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service de Chatbot
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Cette API permet de gérer les services de messageries assistés par intelligence artificielle (IA).
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Signal Controller : Gère les fonctionnalités liées aux clés de signalisation pour établir des connexions sécurisées entre utilisateurs.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Organization Controller : Gère les opérations sur les organisations, y compris la récupération et la suppression d'organisations.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Chatbot Controller : Gère l'interaction avec les chatbots, permettant l'envoi de requêtes et la récupération des modèles disponibles pour les projets.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Authentication Controller : Gère l'authentification des utilisateurs, en s'assurant que seuls les utilisateurs autorisés peuvent accéder au service.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Home Controller : Fournit des informations contextuelles liées à l'organisation de l'utilisateur connecté, facilitant l'accès aux données pertinentes.
                </span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 04:44 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Intégration de nouveaux modèles d'IA pour une compréhension contextuelle améliorée des conversations.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de la gestion des sessions de chat pour une expérience utilisateur plus fluide sur mobile.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-purple-700 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation des endpoints de chatbot pour réduire la latence des réponses de 35%.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Chatbot+Service"
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