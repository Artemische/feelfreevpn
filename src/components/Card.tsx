
import React from 'react';

interface CardProps {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt = '', title, description }) => {
  return (
    <div className="flex shadow-md rounded-lg overflow-hidden w-full max-w-xl">
      <div className="flex-shrink-0">
        <img src={imgSrc} alt={imgAlt} className="h-32 w-32 object-cover" />
      </div>
      <div className="flex flex-col justify-start p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
