'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function BusinessActorsPage() {
  return (
    <>
      <Head>
        <title>API de Service d'Acteurs Commerciaux - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-yellow-500 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faUsers} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service d'Acteurs Commerciaux
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Cette API permet d'interagir avec plusieurs acteurs commerciaux.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Contrôleur acteur-business</strong> : permet de créer, lire, mettre à jour et supprimer des acteurs commerciaux, ainsi que de rechercher des acteurs par nom d'utilisateur, numéro de téléphone ou adresse e-mail.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                <strong>Contrôleur des préférences</strong> : permet d'obtenir les préférences associées à chaque acteur commercial.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                <strong>Contrôleur des comptes</strong> : offre la possibilité de récupérer tous les comptes et de supprimer des comptes spécifiques pour une gestion efficace des utilisateurs.
                </span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 02:35 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout d'une fonctionnalité de validation automatique des informations fiscales pour les acteurs commerciaux.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de la recherche d'acteurs commerciaux avec prise en charge des filtres par secteur d'activité et localisation.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation des endpoints pour réduire le temps de réponse des requêtes de gestion de comptes de 30%.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Business+Actor+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-yellow-500 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}