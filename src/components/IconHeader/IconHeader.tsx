import { House, User, Book, PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { ReactNode } from 'react'

const IconLink = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <Link className="text-black dark:text-white hover:text-white dark:hover:text-black" href={href}>
            {children}
        </Link>
    )
}
const IconHeader = () => {
    return (
        <nav className={`
            bg-primary dark:bg-primary-dark opacity-50 hover:opacity-100
            fixed z-10 right-5 top-1/2 transform -translate-y-1/2 
            flex flex-col gap-8 p-4 
            rounded-full md:hidden
        `}>
            
            <IconLink href="/">
                <House size={24} weight="fill" />
            </IconLink>

            <IconLink href="/aboutme">
                <User size={24} weight="fill" />
            </IconLink>

            <IconLink href="/projects">
               <Book size={24} weight="fill" />
            </IconLink>

            <IconLink href="/contactus">
                <PaperPlaneTilt size={24} weight="fill" />
            </IconLink>
      
        </nav>
    )
}

export { IconHeader }
