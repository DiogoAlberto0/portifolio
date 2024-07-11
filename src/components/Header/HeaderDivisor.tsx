

export const HeaderDivisor = ({ postion = 'medium' }: { postion?: 'top' | 'bottom' | 'medium' }) => {
    if (postion == 'medium') {
        return (
            <div className="bg-black dark:bg-white h-7 w-px relative" />
        )
    } else {
        return (
            <div className="bg-black dark:bg-white h-7 w-px relative">
                <div className={`
                    absolute right-[-3.5px] ${postion === 'top' && 'bottom-7'} ${postion === 'bottom' && 'top-7'} bg-black dark:bg-white h-2 w-2 rounded-full    
                `} />
            </div>
        )

    }
}