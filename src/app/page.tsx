import { Flag } from '@/components/Flag/Flag'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import Image from 'next/image'

const Home = () => {
  return (
    <main className="flex h-screen w-screen overflow-hidden relative">
      <div className="flex flex-col items-start justify-center gap-4 p-20">
        <h2 className="font-bold text-2xl hover:cursor-auto">
          Olá!
        </h2>
        <h1 className="font-extrabold text-3xl">
          Eu sou o <span className="text-primary ">Diogo</span>
        </h1>
        <div className=" w-1/2 flex flex-wrap gap-2">
          <Flag className="font-medium text-md">
            React
          </Flag>
          <Flag className="font-medium text-md">
            Node
          </Flag>
          <Flag className="font-medium text-md">
            Next
          </Flag>
        </div>
        <p className="font-normal">
          Olá! Sou Diogo Alberto, o criador por trás desses aplicativos web incríveis! Bem-vindo ao meu portfólio digital, onde a inovação encontra a funcionalidade. Explore e descubra as soluções que transformam ideias em experiências digitais extraordinárias. Sinta-se à vontade para explorar e entrar em contato para transformar sua visão em realidade. Boas-vindas ao futuro da tecnologia!
        </p>
        <LinkButton href="/aboutme">
          Mais sobre mim
        </LinkButton>
      </div>
      <Image src="/assets/avatar.svg" priority height={1920} width={1080} alt="Avatar" className="w-2/5 h-auto object-cover hidden md:flex" />
    </main>
  )
}

export default Home
