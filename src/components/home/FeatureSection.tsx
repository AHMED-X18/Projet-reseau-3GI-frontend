'use client';

import FeatureCard, { Feature } from "./FeatureCard";

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Pourquoi choisir notre plateforme ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;