'use client';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function MediaServicePage() {
  return (
    <>
      <Head>
        <title>API de Service de Média - Détails</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="font-sans bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center py-4 px-2 sm:px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-red-600 text-white p-4 sm:p-6 rounded-t-lg text-center">
            <FontAwesomeIcon icon={faImage} className="text-xl sm:text-2xl md:text-3xl" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 sm:mt-3">
              API de Service de Média
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-b-lg shadow-lg">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Cette API permet de gérer tous les médias associés aux produits et services. Elle offre un contrôle centralisé sur les images, vidéos et documents, avec des fonctionnalités d'upload, d'organisation et de liaison avec d'autres entités.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Liste des Contrôleurs
            </h2>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Média : Gère le cycle de vie des médias.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>MimeTypes : Contrôle les types de fichiers autorisés.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Stockage : Gère les solutions de stockage.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Redimensionnement : Permet le redimensionnement dynamique.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Filigrane : Ajoute des filigranes.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Miniature : Génère des miniatures.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Lien Média : Établit des relations entre médias et entités.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Traitement par lots : Traitement par lots.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Exif : Extrait les métadonnées.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Compression : Optimise la taille des fichiers.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>CDN : Gère la distribution.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Transcodage : Convertit les formats.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>OCR : Extraction de texte.</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>Aperçu : Génère des aperçus.</span>
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600 mt-4 sm:mt-6 mb-3 sm:mb-4">
              Mises à Jour Récentes
            </h2>
            <p className="italic text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
              Dernière mise à jour : 03:00 PM WAT, Samedi, 21 Juin 2025
            </p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Ajout de la prise en charge du streaming adaptatif pour les vidéos à faible bande passante.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Amélioration de l'algorithme de compression pour réduire la taille des images sans perte de qualité.
                </span>
              </li>
              <li className="flex items-start text-xs sm:text-sm md:text-base">
                <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Intégration d'un nouveau système de gestion des métadonnées pour une meilleure indexation des médias.
                </span>
              </li>
            </ul>

            <a
              href="https://gateway.yowyob.com/webjars/swagger-ui/index.html?urls.primaryName=Media+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
              Voir la Documentation Swagger
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-4 sm:mt-6 text-red-600 text-xs sm:text-sm md:text-base">
            <p>© 2025 Yowyob API Center. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </>
  );
}