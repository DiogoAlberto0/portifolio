import Image from 'next/image'

//sub-components
import { StyledLink } from './StyledLink'
import { HeaderDivisor } from './HeaderDivisor'

const Header = () => {
    return (
        <header className="hidden h-screen w-64 flex-col bg-primary dark:bg-gray-800 md:flex">
            <div className="w-64 h-64 relative">
                <Image src="/assets/avatar.svg" alt="Avatar" fill priority/>
            </div>

            <nav className="flex-1 flex flex-col justify-center items-center">
                <HeaderDivisor postion="top" />
                <StyledLink href="/">Home</StyledLink>
                <HeaderDivisor />
                <StyledLink href="/aboutme">Sobre mim</StyledLink>
                <HeaderDivisor />
                <StyledLink href="/projects">Projetos</StyledLink>
                <HeaderDivisor />
                <StyledLink href="/contactus">Fale comigo</StyledLink>
                <HeaderDivisor postion="bottom" />
            </nav>
        </header>
    )
}

export { Header }
