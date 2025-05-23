'use client';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Centralisez toutes vos APIs en un seul endroit
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Accédez, gérez et intégrez facilement des centaines d&apos;APIs à travers notre plateforme unifiée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 text-lg px-8 py-6">
              Explorer les APIs
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;