'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function LocationServicePage() {
  return (
    <>
      <Head>
        <title>API de Service de Localisation - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-green-600 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service de Localisation
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Cette API permet de gérer des informations liées aux pays et aux villes.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Contrôleur de gestion des pays : permet de créer, lire, mettre à jour et supprimer des informations sur les pays.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Contrôleur de gestion des villes : permet de créer, lire, mettre à jour et supprimer des informations sur les villes.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Recherche Flexible : les différents points d&aposaccès permettent de rechercher des villes par identifiant ou par nom, offrant une flexibilité aux développeurs.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Contrôleur SVG pour la visualisation : permet d&aposobtenir des graphiques ou des cartes en fonction du code de pays, utile pour les applications nécessitant des visualisations géographiques.
                </span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 02:50 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout de la prise en charge des coordonnées géographiques (latitude/longitude) pour les villes.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de la précision des données de localisation avec intégration de sources géographiques externes.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation du contrôleur SVG pour un rendu plus rapide des cartes interactives sur les appareils mobiles.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Location+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-green-600 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}