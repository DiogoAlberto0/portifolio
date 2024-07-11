import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../Title/Title';

interface IProjectCardProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    id: string;
    name: string;
    imageUrl: string;
    technologies: string[];
    href: string;
}

export const ProjectCard = ({ id, name, imageUrl, technologies, className, href, ...otherProps }: IProjectCardProps) => {
    return (
        <Link
            href={href}
            className={`
                relative w-full md:w-1/2 p-4 cursor-pointer transition-transform transform hover:scale-105
                ${className}
            `}
            {...otherProps}
        >
            <div className="relative  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64">
                    <Image
                        src={imageUrl}
                        layout="fill"
                        objectFit="cover"
                        alt={name}
                        className="rounded-lg"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <Title as="h3">{name}</Title>
                    <div className="flex flex-wrap mt-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-yellow-500 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded-full shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};
