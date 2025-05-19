'use client';

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ApiProductCard, { ApiProduct } from "./ApiProductCard";

interface ApiProductsSectionProps {
  products: ApiProduct[];
}

const ApiProductsSection = ({ products }: ApiProductsSectionProps) => {
  const handleViewDetails = (product: ApiProduct) => {
    toast(`API ${product.name}`, {
      description: `Connectez-vous pour voir les détails de l'API ${product.category}.`,
      action: {
        label: "Se connecter",
        onClick: () => console.log("Redirection vers login")
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">APIs Populaires</h2>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <ApiProductCard 
                product={product} 
                onViewDetails={() => handleViewDetails(product)} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </Carousel>

      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          className="border-purple-600 text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-purple-50"
        >
          Voir plus d&apos;APIs <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ApiProductsSection;