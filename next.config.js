/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['randomuser.me'], // Autorise les images de ce domaine
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          port: '',
          pathname: '/api/portraits/**', // Autorise tous les portraits
        },
        // Ajoutez d'autres domaines si nécessaire
      ],
    },
  };
  
  module.exports = nextConfig;