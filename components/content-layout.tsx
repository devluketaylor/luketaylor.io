import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
    return (
        <main className="max-w-3xl px-5 mx-auto">
            {children}
        </main>
    )
}