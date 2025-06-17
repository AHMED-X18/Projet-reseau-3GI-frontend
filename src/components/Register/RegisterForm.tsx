'use client';

import Image from 'next/image';
import styles from './Register.module.css'; // Import the CSS Module
import { useState, useRef } from 'react';

export default function RegisterForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file input change for photo preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
  };

  return (
    <>
      {/* Logo et titre */}
      <div className="text-center mb-8">
        <div className={`${styles.gradientBg} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <i className="fas fa-code text-white text-2xl"></i>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Yowyob API Center</h1>
        <p className="text-gray-600 mt-2">Créez votre compte pour gérer vos APIs</p>
      </div>

      {/* Formulaire d'inscription */}
      <div className={`${styles.formContainer} bg-white rounded-xl shadow-lg overflow-hidden`}>
        <div className="p-8">
          <form
            id="registerForm"
            className="space-y-6"
            method="post"
            action="/user/inscription"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            {/* Photo de profil */}
            <div className="flex flex-col items-center">
              <div className={styles.fileUpload}>
                <div className={styles.previewContainer} id="previewContainer">
                  {preview ? (
                    <Image
                      id="profilePreview"
                      className={styles.previewImage}
                      alt="Profile Preview"
                      src={preview}
                      width={120}
                      height={120}
                    />
                  ) : (
                    <div id="defaultPreview" className={`${styles.previewImage} flex items-center justify-center text-gray-400 text-2xl`}>
                      <i className="fas fa-camera"></i>
                    </div>
                  )}
                  <input
                    type="file"
                    id="profilePicture"
                    name="photo"
                    className={styles.fileUploadInput}
                    accept="image/*"
                    aria-label="Télécharger une photo de profil"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                </div>
              </div>
              <label
                htmlFor="profilePicture"
                className="mt-2 text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                Charger la photo
              </label>
              <p id="profile-error-text" className="hidden mt-1 text-sm text-red-600"></p>
            </div>

            {/* Nom complet */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  type="text"
                  id="fullname"
                  name="nom"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nom"
                />
                <div id="fullname-error" className="hidden absolute right-0 top-0 mt-2 mr-2">
                  <i className="fas fa-exclamation-circle text-red-500"></i>
                </div>
              </div>
              <p id="fullname-error-text" className="hidden mt-1 text-sm text-red-600"></p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email professionnel
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="email@gmail.com"
                />
                <div id="email-error" className="hidden absolute right-0 top-0 mt-2 mr-2">
                  <i className="fas fa-exclamation-circle text-red-500"></i>
                </div>
              </div>
              <p id="email-error-text" className="hidden mt-1 text-sm text-red-600"></p>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  type="password"
                  id="password"
                  name="mot_de_passe"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
                />
                <div id="password-error" className="hidden absolute right-0 top-0 mt-2 mr-2">
                  <i className="fas fa-exclamation-circle text-red-500"></i>
                </div>
                <button
                  type="button"
                  id="togglePassword"
                  className="absolute right-0 top-0 mr-3 mt-2 text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-eye"></i>
                </button>
              </div>
              <div id="password-strength" className="hidden mt-2">
                <div className="flex space-x-1">
                  <div id="strength-1" className="h-1 w-full passwordStrengthBar bg-gray-200 rounded-full"></div>
                  <div id="strength-2" className="h-1 w-full passwordStrengthBar bg-gray-200 rounded-full"></div>
                  <div id="strength-3" className="h-1 w-full passwordStrengthBar bg-gray-200 rounded-full"></div>
                  <div id="strength-4" className="h-1 w-full passwordStrengthBar bg-gray-200 rounded-full"></div>
                </div>
                <p id="strength-text" className="text-xs mt-1 text-gray-500"></p>
              </div>
              <p id="password-error-text" className="hidden mt-1 text-sm text-red-600"></p>
            </div>

            {/* Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  J'accepte les{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    politique de confidentialité
                  </a>
                </label>
              </div>
            </div>
            <p id="terms-error-text" className="hidden mt-1 text-sm text-red-600">
              Vous devez accepter les conditions
            </p>

            {/* Bouton d'inscription */}
            <button
              type="submit"
              className={`${styles.submitBtn} w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
            >
              Créer mon compte
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous avez déjà un compte?{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Connectez-vous
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}