import { ReactNode } from "react";
import {ThemeProvider} from "next-themes";
import Footer from "@/components/footer";

export default function ContentLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class">
        <main className="max-w-3xl px-5 mx-auto">
            {children}
            <Footer />
        </main>
        </ThemeProvider>
    )
}