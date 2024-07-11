import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title = ({ children, as, className, ...otherProps }: ITitleProps) => {

    const Tag = as

    const styles = {
        'h1': '',
        'h2': 'text-2xl sm:text-4xl font-extrabold',
        'h3': 'text-xl sm:text-3xl font-bold',
        'h4': 'text-md sm:text-2xl font-bold'
    }

    if(Tag === 'h1') return (
        <div className="mb-8">
            <h1 className={`text-3xl sm:text-5xl font-extrabold text-yellow-500 dark:text-yellow-300 ${className}`}>
                {children}
            </h1>
            <div className="mt-2 h-1 bg-yellow-500 dark:bg-yellow-300 rounded-full w-24"></div>
        </div>
    ); else return (
        <Tag className={`${styles[Tag]} ${className}`} {...otherProps}>{children}</Tag>
    )
}