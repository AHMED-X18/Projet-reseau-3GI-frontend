'use client';
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export type SocialLink = {
  name: string;
  icon: ReactNode;
  hoverColor: string;
};

interface SocialMediaSectionProps {
  socialLinks: SocialLink[];
}

const SocialMediaSection = ({ socialLinks }: SocialMediaSectionProps) => {
  return (
    <div className="w-full mt-20 py-12 bg-gray-800 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-8 text-center">Suivez-nous sur les réseaux sociaux</h2>
      <div className="w-full flex justify-center space-x-6">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-opacity-90 ${link.hoverColor}`}
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;