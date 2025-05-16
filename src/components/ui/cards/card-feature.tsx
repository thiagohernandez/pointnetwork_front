import React from "react";

interface CardFeatureProps {
  icon?: React.ReactNode | null;
  title: string;
  children: React.ReactNode;
  className?: string | null;
}

const CardFeature = ({
  icon,
  title,
  children,
  className,
}: CardFeatureProps) => {
  return (
    <div className={`flex flex-col gap-6 ${className && className}`}>
      {icon && <div className="w-full">{icon}</div>}
      <div className="flex flex-col gap-2">
        <h4 className="text-id-gray-dark text-md font-semibold tracking-tight">
          {title}
        </h4>
        <div className="tracking-tight text-base font-normal text-id-gray card-content">
          {children}
        </div>
      </div>
    </div>
  );
};

CardFeature.displayName = "CardFeature";

export default CardFeature;
