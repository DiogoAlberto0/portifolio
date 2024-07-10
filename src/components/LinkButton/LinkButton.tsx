import Link from "next/link"
import { DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import { Button } from "../Button/Button"

interface ILinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    variant?: 'primary' | 'secondary'
}
export const LinkButton = ({ href, children, className, variant = 'primary', ...otherProps }: ILinkButtonProps ) => {
    return (
        <Link 
            href={href}
            {...otherProps}
        >
            <Button variant={variant} className={className}>
                {children}
            </Button>
        </Link>
    )
}