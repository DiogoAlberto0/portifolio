//data
import { getData } from "@/utils/datoCMS"

//type
import { IHabilityType } from "./IHability"

//components
import { Title } from "@/components/Title/Title"
import { HabilityCard } from "./HabilityCard"


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
                        allHabilities.map(hability => <HabilityCard key={hability.id} hability={hability}/>)
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
