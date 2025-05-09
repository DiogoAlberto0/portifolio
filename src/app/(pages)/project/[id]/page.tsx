//icons
import {
  At,
  GithubLogo,
  Link as LinkIcon,
} from "@phosphor-icons/react/dist/ssr";

//data
import { getData } from "@/utils/datoCMS";

//components
import { ProjectSlide } from "./Slide";
import { IProjectType } from "./IProject";
import { HabilityIcon } from "./HabilityIcon";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { Title } from "@/components/Title/Title";

// lib markdown
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
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
    `);

  return (
    <div className="p-8">
      <Title as="h1">{project.name}</Title>

      <ProjectSlide imagesUrl={project.print.map((print) => print.url)} />

      <div className="mt-8">
        <article className="mb-6 flex flex-col gap-2 prose lg:prose-xl">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {project.description}
          </ReactMarkdown>
        </article>

        {project.technologies.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
            <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
              {project.technologies.map((tech, index) => (
                <HabilityIcon key={index} tech={tech} />
              ))}
            </div>
          </>
        )}

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
