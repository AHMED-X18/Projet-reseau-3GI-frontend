'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export type ApiProduct = {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: ReactNode;
  iconBgColor: string;
  features: string[];
};

interface ApiProductCardProps {
  product: ApiProduct;
  onViewDetails: (product: ApiProduct) => void;
}

const ApiProductCard = ({ product, onViewDetails }: ApiProductCardProps) => {
  return (
    <Card className="h-full border border-gray-200 overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-full ${product.iconBgColor} flex items-center justify-center mr-4`}>
            {product.icon}
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          {product.features.map((feature, index) => (
            <span key={index} className="text-sm text-gray-500">
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4">
        <Button 
          variant="ghost" 
          className="text-purple-600 font-medium flex items-center p-0"
          onClick={() => onViewDetails(product)}
        >
          Voir détails <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApiProductCard;