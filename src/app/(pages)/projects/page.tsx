import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { Title } from "@/components/Title/Title";
import { getData } from "@/utils/datoCMS"


interface IProjectType {
    id: string;
    name: string;
    print: { url: string }[]
    technologie: string[]
}
const Projects = async () => {


    const { allProjects: projects } = await getData<{ allProjects: IProjectType[] }>(`
        {
            allProjects {
                id
                name
                print {
                    url
                }
                technologie
            }
        }
    `)

    return (
        <div className="p-8">
            <Title as="h1">Projetos</Title>

            <div className="flex flex-wrap justify-center">
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            imageUrl={project.print[0].url}
                            technologies={project.technologie.slice(0, 2)}
                            href={`/project/${project.id}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Projects