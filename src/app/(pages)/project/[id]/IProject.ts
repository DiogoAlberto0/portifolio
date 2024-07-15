export interface ITechnology { hability: string, icon: { url: string }}

export interface IProjectType {
    id: string;
    name: string;
    description: string;
    liveurl: string;
    codeUrl: string;
    supportemail: string;
    technologies: ITechnology[];
    print: { url: string }[];
}