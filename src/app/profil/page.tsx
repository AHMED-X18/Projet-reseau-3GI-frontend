'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  nom: string;
  login: string;
  email: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    id: '1',
    nom: 'Jean Dupont',
    login: 'jeandupont',
    email: 'jean@example.com'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    ...user,
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setFormData({ ...user, password: '', confirmPassword: '' });
  }, [user]);

  // Validation des données
  const validateFormData = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
    }

    if (!formData.login.trim()) {
      newErrors.login = 'Le nom d’utilisateur est requis';
    } else if (formData.login.trim().length < 3) {
      newErrors.login = 'Le nom d’utilisateur doit contenir au moins 3 caractères';
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.login)) {
      newErrors.login = 'Le nom d’utilisateur ne peut contenir que des lettres, chiffres, tirets et underscores';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L’email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d’email invalide';
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gérer les changements dans le formulaire
  const handleInputChange = (field: keyof User | 'password' | 'confirmPassword', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Sauvegarder les modifications
  const handleSave = async () => {
    if (!validateFormData()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mise à jour uniquement des champs non-mot de passe
      setUser({
        id: formData.id,
        nom: formData.nom,
        login: formData.login,
        email: formData.email
      });
      setIsEditing(false);
      setSuccessMessage('Profil mis à jour avec succès !');
      // Effacer le message de succès après 3 secondes
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Annuler les modifications
  const handleCancel = () => {
    setFormData({ ...user, password: '', confirmPassword: '' });
    setIsEditing(false);
    setErrors({});
  };

  // Supprimer le compte
  const handleDeleteAccount = async () => {
    setIsLoading(true);
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirection vers la page de connexion après suppression
      router.push('/login?message=account-deleted');
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    } finally {
      setIsLoading(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mon Profil - {user.nom}</title>
        <meta name="description" content="Gérez votre profil utilisateur" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Mon Profil</h1>
            <p className="text-blue-600">Gérez vos informations personnelles</p>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg shadow-sm animate-fade-in">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {successMessage}
              </div>
            </div>
          )}

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 md:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{user.nom}</h2>
                    <p className="text-blue-100">@{user.login}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-200 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>Modifier</span>
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleCancel}
                        disabled={isLoading}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-200 disabled:opacity-50"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 flex items-center space-x-2"
                      >
                        {isLoading && (
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        )}
                        <span>Sauvegarder</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-blue-900">Nom complet</label>
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                          errors.nom ? 'border-red-300 bg-red-50' : 'border-blue-200 focus:border-blue-400'
                        }`}
                        placeholder="Votre nom complet"
                      />
                      {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
                    </div>
                  ) : (
                    <p className="text-lg text-gray-700 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">{user.nom}</p>
                  )}
                </div>

                {/* Username */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-blue-900">Nom d&apos utilisateur</label>
                  {isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={formData.login}
                        onChange={(e) => handleInputChange('login', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                          errors.login ? 'border-red-300 bg-red-50' : 'border-blue-200 focus:border-blue-400'
                        }`}
                        placeholder="Votre nom d'utilisateur"
                      />
                      {errors.login && <p className="mt-1 text-sm text-red-600">{errors.login}</p>}
                    </div>
                  ) : (
                    <p className="text-lg text-gray-700 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">@{user.login}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-semibold text-blue-900">Adresse email</label>
                  {isEditing ? (
                    <div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-blue-200 focus:border-blue-400'
                        }`}
                        placeholder="votre.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  ) : (
                    <p className="text-lg text-gray-700 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">{user.email}</p>
                  )}
                </div>

                {/* Password */}
                {isEditing && (
                  <>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">Nouveau mot de passe</label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                          errors.password ? 'border-red-300 bg-red-50' : 'border-blue-200 focus:border-blue-400'
                        }`}
                        placeholder="Entrez le nouveau mot de passe"
                      />
                      {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">Confirmez le mot de passe</label>
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                          errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-blue-200 focus:border-blue-400'
                        }`}
                        placeholder="Confirmez le nouveau mot de passe"
                      />
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="border-t border-blue-100 bg-gradient-to-r from-red-50 to-pink-50 px-6 py-6 md:px-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Zone de danger</h3>
              <p className="text-red-700 mb-4 text-sm">
                Cette action est irréversible. Toutes vos données seront définitivement supprimées.
              </p>
              <button
                onClick={() => setShowDeleteModal(true)}
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Supprimer mon compte</span>
              </button>
            </div>
          </div>

          {/* Copyright Footer */}
          <footer className="mt-8 text-center text-blue-600 text-sm py-4">
            © {new Date().getFullYear()} YOWYOB API Center. Tous droits réservés.
          </footer>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-red-100">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Supprimer le compte</h3>
                <p className="text-gray-600 text-center mb-6">
                  Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    disabled={isLoading}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={isLoading}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isLoading && (
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    <span>Supprimer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
}