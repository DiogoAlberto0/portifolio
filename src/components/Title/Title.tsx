import { ReactNode } from "react";


export const Title = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mb-8">
            <h1 className="text-5xl font-extrabold text-yellow-500 dark:text-yellow-300">
                {children}
            </h1>
            <div className="mt-2 h-1 bg-yellow-500 dark:bg-yellow-300 rounded-full w-24"></div>
        </div>
    );
};