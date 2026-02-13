import React from "react";

interface FloatingStickerProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  delay?: number;
  reverse?: boolean;
}

const FloatingSticker: React.FC<FloatingStickerProps> = ({
  src,
  alt,
  className = "",
  size = 80,
  delay = 0,
  reverse = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute select-none pointer-events-none drop-shadow-md ${
        reverse ? "animate-float-reverse" : "animate-float"
      } ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        objectFit: "contain",
      }}
      draggable={false}
    />
  );
};

export default FloatingSticker;
