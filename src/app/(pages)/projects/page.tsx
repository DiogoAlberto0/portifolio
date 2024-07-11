import { ProjectCard } from "@/components/ProjectCard/ProjectCard"
import { Title } from "@/components/Title/Title";
import { getData } from "@/utils/datoCMS"


interface IProjectType {
    id: string;
    name: string;
    print: { url: string }[]
    technologies: { hability: string }[]
}
const Projects = async () => {

    const { allProjects } = await getData<{ allProjects: IProjectType[] }>(`
        query MyQuery {
            allProjects {
              print {
                    url
                }
              technologies {
                    hability
                }
                name
            }
        }
    `)

    return (
        <div className="p-8">
            <Title as="h1">Projetos</Title>

            <div className="flex flex-wrap justify-center">
                {
                    allProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            imageUrl={project.print[0].url}
                            technologies={project.technologies.slice(0, 2).map(tech => tech.hability)}
                            href={`/project/${project.id}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Projects