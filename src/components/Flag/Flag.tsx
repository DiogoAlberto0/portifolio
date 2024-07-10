import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IFlagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{

}
export const Flag = ({ children, className, ...otherProps }: IFlagProps) => {
    return (
        <span 
            className={`
                bg-primary text-center p-2 rounded
                ${className}
            `}
            {...otherProps}
        >
          {children}
        </span>
    )
}