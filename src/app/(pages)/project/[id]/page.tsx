import { At, GithubLogo, Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';
import { ProjectSlide } from './Slide';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Title } from '@/components/Title/Title';
import { getData } from '@/utils/datoCMS';
import Image from 'next/image';

interface IProjectType {
    id: string;
    name: string;
    description: string;
    liveurl: string;
    codeUrl: string;
    supportemail: string;
    technologies: { hability: string, icon: { url: string }}[];
    print: { url: string }[];
}
const Project = async ({
    params: { id }
}: { params: { id: string } }) => {


    const { project } = await getData<{ project: IProjectType }>(`
        query MyQuery {
            project(filter: { id: { eq: "${id}" } }) {
                id
                name
                liveurl
                description
                codeUrl
                print {
                    url
                }
                technologies {
                    hability
                    icon {
                        url
                    }
                }
                supportemail
            }
        }
    `)

    console.log(project)



    return (
        <div className="p-8">
            <Title as="h1">{project.name}</Title>

            <ProjectSlide imagesUrl={project.print.map(print => print.url)} />

            <div className="mt-8">
                <div dangerouslySetInnerHTML={{ __html: project.description}}  className="mb-6 flex flex-col gap-2" />

                {
                    project.technologies.length > 0 &&
                    <>
                        <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="flex flex-col justify-center items-center bg-gray-800 rounded-full h-32 w-32"
                                >
                                    <Image height={40} width={40} src={tech.icon.url} alt=""/>
                                    {tech.hability}
                                </span>
                            ))}
                        </div>
                    </>
                }

                <div className="flex gap-4 flex-wrap mb-8">
                    <LinkButton
                        href={project.codeUrl}
                        target="_blank"
                        className="flex items-center rounded-lg"
                    >
                        <GithubLogo className="mr-2" size={24} />
                        Código Fonte
                    </LinkButton>
                    {project.liveurl && (
                        <LinkButton
                            href={project.liveurl}
                            target="_blank"
                            className="flex items-center rounded-lg"
                            variant="secondary"
                        >
                            <LinkIcon className="mr-2" size={24} />
                            Ver Projeto
                        </LinkButton>
                    )}
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap items-center justify-center space-x-4">
                        <At size={24} className="text-yellow-500 min-w-6 min-h-6" />
                        <p className="font-medium">{project.supportemail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
