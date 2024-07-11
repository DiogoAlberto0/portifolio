import { Title } from "@/components/Title/Title"
import { getData } from "@/utils/datoCMS"
import { Atom, FileTs, GithubLogo, FileJs } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

interface IHabilityType {
    id: string;
    hability: string;
    description: string,
    icon: {
        url: string;
    }
}
const AboutMe = async () => {
    const { static: data } = await getData<{ static: { aboutme: string } }>(`
        query MyQuery {
            static {
                aboutme
            }
        }
    `)

    const { allHabilities } = await getData<{ allHabilities: IHabilityType[] }>(`
        query MyQuery {
            allHabilities {
                id
                hability
                description
                icon {
                    url
                }
            }
        }    
    `)

    return (
        <div className="p-8">
            <Title as="h1">Sobre mim</Title>

            <Title as="h2" className="mb-6">Um pouco mais sobre a minha trajetória</Title>

            <div className="mb-8">
                {
                    data.aboutme.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))
                }
            </div>


            <div>
                <Title as="h3" className="mb-2">Habilidades</Title>

                <div className="space-y-6">
                    {
                        allHabilities.map(hability => (
                            <div className="flex flex-col sm:flex-row space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" key={hability.id}>
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
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
{/* <div className="flex flex-wrap items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" key={hability.id}>
    <div className="bg-red-500">
        <Image width={48} height={48} alt="Icon" src={hability.icon.url} />
    </div>
    <div className="bg-blue-500">
        <h4 className="text-2xl font-bold mb-2">{hability.hability}</h4>
        <p className="text-lg">
            {hability.description}
        </p>
    </div>
</div> */}
export default AboutMe
