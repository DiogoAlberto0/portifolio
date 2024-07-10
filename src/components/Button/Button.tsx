import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: 'primary' | 'secondary'
}
export const Button = ({ children, className, variant = 'primary', ...otherProps }: IButtonProps ) => {

    const variants = {
        'primary': 'bg-primary  hover:text-white dark:hover:opacity-50',
        'secondary': 'bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
    }
    return (
        <button className={`
            ${variants[variant]}
            py-3 px-8 rounded-full 
            text-xl font-bold 
            ${className}
        `}
            {...otherProps}
        >
            {children}
        </button>
    )
}