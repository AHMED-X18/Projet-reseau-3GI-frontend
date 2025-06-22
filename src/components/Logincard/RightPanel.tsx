'use client';

import styles from '@/app/login/style.module.css';


export default function RightPanel() {
  return (
    <div className={`w-full md:w-1/2 p-8 md:p-12 ${styles.rightPanel}`}>
      <div className="text-center mb-2">
        <div className={`w-16 h-16 ${styles.gradientBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <i className="fas fa-code text-blue-400 text-2xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">YOWYOB API Center</h2>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-1">Connectez-vous</h2>
      <p className="text-gray-500 mb-6">Entrez vos identifiants pour accéder à votre compte</p>

      <form id="loginForm" className="space-y-6">
        <div className={`input-group space-y-1 ${styles.inputGroup}`}>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Adresse email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-envelope text-gray-400"></i>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="nom@exemple.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div id="emailError" className="text-sm text-red-600 hidden"></div>
        </div>

        <div className={`input-group space-y-1 ${styles.inputGroup}`}>
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Mot de passe</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              autoComplete="current-password"
            />
            <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-500" onClick={() => {}}>
              <i className="far fa-eye" id="togglePasswordIcon"></i>
            </button>
          </div>
          <div id="passwordError" className="text-sm text-red-600 hidden"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              name="remember"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Se souvenir de moi</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Mot de passe oublié ?</a>
        </div>

        <button type="submit" className={`login-btn w-full py-3 px-4 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${styles.loginBtn}`}>
          <i className="fas fa-sign-in-alt mr-2"></i> Se connecter
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">Vous n'avez pas de compte ? <a href="/inscription" className="font-medium text-blue-600 hover:text-blue-700">S'inscrire</a></p>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>En vous connectant, vous acceptez nos <a href="#" className="underline">Conditions d'utilisation</a> et notre <a href="#" className="underline">Politique de confidentialité</a>.</p>
      </div>
    </div>
  );
}