'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

interface ImageCarouselProps {
    imagesUrl: string[];
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const ProjectSlide: React.FC<ImageCarouselProps> = ({ imagesUrl }) => {
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            ssr={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            autoPlaySpeed={5000}
            pauseOnHover={true}
            showDots={true}
        >
            {imagesUrl.map((imageUrl, index) => (
                <div key={index} className="relative">
                    <Image
                        className="w-full"
                        src={imageUrl}
                        height={1920}
                        width={1080}
                        alt={`Project image ${index + 1}`}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export { ProjectSlide };
