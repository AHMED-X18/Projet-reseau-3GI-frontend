'use client';

import styles from '@/app/login/style.module.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function LoginCard() {
  return (
    <div className={`flex max-w-4xl w-full bg-white rounded-xl overflow-hidden ${styles.loginCard}`}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}