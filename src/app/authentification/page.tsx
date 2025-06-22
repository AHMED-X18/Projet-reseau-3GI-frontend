'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function AuthenticationPage() {
  return (
    <>
      <Head>
        <title>API de Service d'Authentification - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-blue-600 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faLock} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service d'Authentification
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 mb-3 sm:mb-4">
              Cette API d'authentification fournit un cadre complet pour gérer l'accès et la sécurité des utilisateurs et des ressources d'une application, elle inclut des contrôleurs qui permettent de gérer les utilisateurs et les ressources.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur de rôles :</strong> Gère les opérations liées aux rôles et permissions dans un système d'authentification.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur de permission :</strong> Gère les opérations liées aux permissions dans le système.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur d'authentification :</strong> Gère les opérations liées à l'authentification des utilisateurs.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur client :</strong> Gère les opérations liées aux clients qui interagissent avec le système.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur de ressources :</strong> Gère les opérations liées aux ressources protégées par le système d'authentification.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur utilisateur :</strong> Gère les opérations liées aux utilisateurs du système.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur Jwks :</strong> Gère les opérations liées aux JSON Web Keys (JWKS) utilisées pour la validation des tokens.
                </span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 05:00 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout de la prise en charge de l'authentification unique (SSO) via SAML 2.0 pour une intégration simplifiée.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de la gestion des tokens JWT pour une expiration et un renouvellement plus rapides.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation des requêtes de validation de permissions, réduisant le temps de réponse de 25%.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Auth+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-blue-600 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}