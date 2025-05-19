'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  stars: number;
  text: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  // Render stars for testimonials
  const renderStars = (count: number) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count - fullStars >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 text-yellow-400" />
      );
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
            <Image src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" width={48} height={48} />
          </div>
          <div className="text-left">
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        <div className="flex mb-2">
          {renderStars(testimonial.stars)}
        </div>
        <p className="text-gray-600 text-left italic">{testimonial.text}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;