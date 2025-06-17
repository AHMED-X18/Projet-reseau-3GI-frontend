'use client';

import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar({ user, isOpen }) {
  return (
    <aside className={`${styles.sidebar} ${!isOpen && styles.collapsed}`}>
      <div className="mb-8">
        <h2 className="text-xl font-bold">YOWYOB API Center</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
              <i className="fas fa-user mr-3"></i> {user.name}
          </li>
          <li>
            <Link href="#" className={styles.navItem}>
              <i className="fas fa-id-card mr-3"></i> Mon Profil
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.navItem}>
              <i className="fas fa-question-circle mr-3"></i> Aide
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.navItem}>
              <i className="fas fa-sign-out-alt mr-3"></i> Déconnexion
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}