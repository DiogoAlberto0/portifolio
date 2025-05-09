"use client";
// next
import React, { useEffect, useState } from "react";
import Image from "next/image";

//icons
import { ArrowArcLeft, ArrowArcRight } from "@phosphor-icons/react";

// components
import { Button } from "@/components/Button/Button";

interface ImageCarouselProps {
  imagesUrl: string[];
}

const ProjectSlide: React.FC<ImageCarouselProps> = ({ imagesUrl }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev >= imagesUrl.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // limpeza
  }, [imagesUrl.length, isHovered]);

  return (
    <div
      className="aspect-video relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className="absolute left-10 top-1/2 -translate-y-1/2"
        onClick={() => {
          setCurrentImage(() => {
            if (currentImage <= 0) return imagesUrl.length - 1;
            else return currentImage - 1;
          });
        }}
      >
        <ArrowArcLeft />
      </Button>
      <Button
        className="absolute right-10 top-1/2 -translate-y-1/2"
        onClick={() => {
          setCurrentImage(() => {
            if (currentImage >= imagesUrl.length - 1) return 0;
            else return currentImage + 1;
          });
        }}
      >
        <ArrowArcRight />
      </Button>
      {imagesUrl.map((url, index) => {
        return (
          <Image
            key={index}
            src={url}
            alt=""
            width="1980"
            height="1024"
            className={`
                ${currentImage == index ? "w-full" : "w-0"}
                transition-all duration-500 ease-in-out
            `}
          />
        );
      })}

      <div className=" absolute bottom-0 -translate-y-1/2 flex gap-1">
        {imagesUrl.map((value, index) => {
          return (
            <button
              key={index}
              className={`
                 h-4 w-4 rounded-full
                 transition-colors duration-500 ease-in-out
                ${currentImage == index ? "bg-primary" : "bg-black"}
                `}
              onClick={() => setCurrentImage(index)}
            >
              {" "}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { ProjectSlide };
