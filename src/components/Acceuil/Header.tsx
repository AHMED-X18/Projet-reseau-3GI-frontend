'use client';

import styles from './Header.module.css';

export default function Header() {
  const categories = [
    'Toutes', 'Authentification', 'Commerce', 'Localisation', 'Média',
    'Notification', 'Organisation', 'Paiement', 'Ressources',
  ];

  return (
    <header className={styles.header}>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="flex space-x-2 mb-4 md:mb-0 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${category === 'Toutes' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Rechercher une API..."
            className={styles.searchInput}
          />
          <i className="fas fa-search absolute left-3 top-2 text-gray-400"></i>
        </div>
      </div>
    </header>
  );
}