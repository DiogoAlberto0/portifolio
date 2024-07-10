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
        <div className="">
            <Title>Sobre mim</Title>

            <h2 className="text-4xl font-extrabold mb-6">Um pouco mais sobre a minha trajetória</h2>

            <p className="text-lg mb-4">
                Olá, sou Diogo Alberto, um desenvolvedor web apaixonado com uma sólida experiência em tecnologias front-end e conhecimento básico em backend. Meu caminho profissional começou na faculdade, onde mergulhei fundo no universo do desenvolvimento web, especializando-me em JavaScript, HTML e CSS. Com habilidades sólidas nessas linguagens de programação fundamentais, desenvolvi projetos dinâmicos e responsivos que proporcionam experiências de usuário excepcionais em dispositivos móveis e desktops.
            </p>

            <p className="text-lg mb-4">
                Além do meu conhecimento técnico, sou um colaborador proativo e comprometido com o trabalho em equipe. Acredito na aprendizagem contínua e mantenho-me atualizado sobre as últimas tendências e melhores práticas em React, Node.js e outras tecnologias relacionadas. Estou animado para aplicar minhas habilidades e experiência em um ambiente profissional, contribuindo para projetos inovadores e desafiadores no mundo do desenvolvimento web.
            </p>

            <p className="text-lg mb-8">
                Estou à procura de oportunidades que me permitam expandir meu conhecimento, enfrentar novos desafios e trabalhar em projetos que impactem positivamente os usuários finais. Estou entusiasmado para fazer parte de uma equipe talentosa e colaborativa, onde posso aplicar minha paixão pelo desenvolvimento web e criar soluções que elevem as experiências online para o próximo nível.
            </p>

            <div>
                <h3 className="text-3xl font-bold mb-6">Habilidades</h3>

                <div className="space-y-6">
                    {
                        allHabilities.map(hability => (
                            <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" key={hability.id}>
                                <div>
                                    <Image width={48} height={48} alt="Icon" src={hability.icon.url}/>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">{hability.hability}</h4>
                                    <p className="text-lg">
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

export default AboutMe
