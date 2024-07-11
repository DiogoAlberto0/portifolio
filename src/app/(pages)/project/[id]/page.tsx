import { At, GithubLogo, Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';
import { ProjectSlide } from './Slide';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Title } from '@/components/Title/Title';
import { getData } from '@/utils/datoCMS';

interface IProjectType {
    id: string;
    name: string;
    description: string;
    technologie: string[];
    liveurl: string;
    codeUrl: string;
    supportemail: string;
    print: { url: string }[];
}
const Project = async ({
    params: { id }
}: { params: { id: string } }) => {

    const { project } = await getData<{ project: IProjectType }>(`
        query MyQuery {
            project (filter: {id: {eq: "${id}"}}){
                id
                name
                description
                technologie
                liveurl
                codeUrl
                supportemail
                print {
                    url
                }
            }
        }
    `)



    return (
        <div className="p-8">
            <Title as="h1">{project.name}</Title>

            <ProjectSlide imagesUrl={project.print.map(print => print.url)} />

            <div className="mt-8">
                <p className="mb-6">{project.description}</p>

                {
                    project.technologie.length > 0 &&
                    <>
                        <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap mb-8">
                            {project.technologie.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-yellow-500 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded"
                                >
                                    {tech}
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
