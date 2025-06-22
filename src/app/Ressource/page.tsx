'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ResourceServicePage() {
  return (
    <>
      <Head>
        <title>API de Service de Ressources - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-gray-600 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faBoxes} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service de Ressources
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Cette API permet de gérer divers services liés aux produits et aux transactions. Elle inclut des contrôleurs pour gérer les prix, les variations, les services, les ressources, ainsi que les interactions avec les avis et les médias.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Prix de Vente : Permet de gérer les prix et les ventes des produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Variations : Gère les variations des produits, permettant de définir des options comme la taille ou la couleur.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Services : Permet de gérer les services associés aux produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Ressources : Gère les ressources liées aux produits et services.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Publications de Produits : Permet de gérer les publications de produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Marques de Produits : Gère les marques de produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Modèles : Permet de gérer les modèles de produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Catégories : Gère les catégories de produits pour une meilleure organisation.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Attributs : Permet de gérer les attributs des produits, comme les spécifications techniques.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Avis : Gère les avis des utilisateurs sur les produits.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Réactions : Permet de gérer les réactions aux publications et avis.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Médias : Gère les médias associés aux produits et aux avis.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Mode de Tarification : Gère les modes de paiement.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>Favicon-controller : Permet d’évaluer les performances des services ou produits.</span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 04:12 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout d'un système de recommandations automatiques pour les catégories de produits basées sur les avis.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de la gestion des variations avec prise en charge des combinaisons multiples pour les produits complexes.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Optimisation des endpoints de médias pour une récupération 25% plus rapide des images associées aux produits.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Resource+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-gray-600 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}