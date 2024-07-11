import { Flag } from '@/components/Flag/Flag'
import { LinkButton } from '@/components/LinkButton/LinkButton'
import { Title } from '@/components/Title/Title'
import { getData } from '@/utils/datoCMS'
import Image from 'next/image'

interface IStaticData {
  photo: {
    url: string;
  };
  name: string;
  resume: string;
}

const Home = async () => {

  const { static: data } = await getData<{ static: IStaticData }>(`
      query MyQuery {
        static {
          photo {
            url
          }
          name
          resume
        }
      }
  `)
  return (
    <main className="flex h-screen w-screen overflow-hidden relative">
      <div className="flex flex-col items-start justify-center gap-4 p-2 md:p-20">
        <div>
          <Title as="h1" className="text-white">
            Olá!
          </Title>
          <Title as="h2" className="font-extrabold text-3xl">
            Eu sou o <span className="text-primary ">{data.name}</span>
          </Title>
        </div>
        <p className="font-normal max-h-[50%] overflow-auto">{data.resume}</p>
        <LinkButton href="/aboutme">
          Mais sobre mim
        </LinkButton>
      </div>
      <Image
        src={data.photo.url}
        priority
        height={1920}
        width={1080}
        alt="Avatar"
        className="absolute h-40 w-40 rounded-full -right-10 -top-10 border-primary border-4 md:relative md:w-2/5 md:object-cover md:h-full md:rounded-none md:border-none md:top-0 md:right-0"
      />
    </main>
  )
}

export default Home

// w-2/5 h-auto object-cover hidden md:flex