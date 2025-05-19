'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-indigo-600 text-2xl">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;