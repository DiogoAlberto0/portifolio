import { IHabilityType } from "./IHability"

import { Title } from "@/components/Title/Title"
import Image from "next/image"


export const HabilityCard = ({ hability }: { hability: IHabilityType }) => {
    return (
        <div className="flex flex-col sm:flex-row space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className=" flex justify-center items-center min-h-14 min-w-14">
                <Image width={56} height={56} alt="Icon" src={hability.icon.url} />
            </div>
            <div className="">
                <Title as="h4" className="mb-2">{hability.hability}</Title>
                <p>
                    {hability.description}
                </p>
            </div>
        </div>
    )
}