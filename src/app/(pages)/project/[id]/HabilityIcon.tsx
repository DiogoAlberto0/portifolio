import Image from "next/image"
import { ITechnology } from "./IProject"


export const HabilityIcon = ({ tech }: { tech: ITechnology }) => {
    return (
        <span
            className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 shadow-md dark:shadow-slate-700 rounded-full h-32 w-32"
        >
            <Image height={40} width={40} src={tech.icon.url} alt="" />
            {tech.hability}
        </span>
    )
}