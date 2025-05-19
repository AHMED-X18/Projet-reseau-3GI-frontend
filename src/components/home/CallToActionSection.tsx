'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <div className="mt-20 text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white">
      <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Inscrivez-vous gratuitement et obtenez votre clé API en quelques secondes.
      </p>
      <Button className="bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 text-lg px-8 py-6">
        Créer un compte <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default CallToActionSection;