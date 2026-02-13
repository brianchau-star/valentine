import React from "react";

interface PhotoCardProps {
  imageSrc: string;
  caption?: string;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageSrc,
  caption = "",
  className = "",
}) => {
  return (
    <div
      className={`bg-valentine-card rounded-2xl shadow-lg overflow-hidden
        w-50 flex flex-col transition-transform duration-300 hover:scale-105 hover:-rotate-1 ${className}`}
      style={{
        boxShadow:
          "0 8px 32px rgba(225, 29, 72, 0.10), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* Photo area */}
      <div className="p-3 pb-0">
        <div className="rounded-xl overflow-hidden border-2 border-gray-800/10">
          <img
            src={imageSrc}
            alt={caption}
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
      {/* Caption */}
      {caption && (
        <div className="px-3 py-4 text-center">
          <p className="font-dancing text-valentine-text-muted text-lg italic">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
