import Link, { LinkProps } from "next/link"
import { ForwardRefExoticComponent, AnchorHTMLAttributes } from "react"

interface IStyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}
export const StyledLink = ({ href, children, className, ...otherProps }: IStyledLinkProps) => {
    return (
        <Link
            className={`
                h-7 w-full 
                flex items-center justify-center 
                text-black dark:text-white hover:text-white dark:hover:text-black
                font-bold
                ${className}    
            `}
            href={href}
            {...otherProps}
        >
            {children}
        </Link>
    )
}