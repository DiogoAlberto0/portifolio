import { Header } from "@/components/Header/Header";
import { IconHeader } from "@/components/IconHeader/IconHeader";


export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <IconHeader />
            <Header />
            <main className="w-full max-h-screen overflow-auto sm:p-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}
