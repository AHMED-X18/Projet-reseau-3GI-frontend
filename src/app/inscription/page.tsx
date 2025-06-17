'use client';

import RegisterForm from '@/components/Register/RegisterForm';
import './style.module.css';
import Head from 'next/head';
import Script from 'next/script';

export default function InscriptionPage() {
  return (
    <>
      <Head>
        <title>Inscription - API Manager</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      
      <div className="min-h-screen flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
      
      <Script src="/inscription/inscription.js" strategy="lazyOnload" />
    </>
  );
}