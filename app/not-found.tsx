import Navbar from "@/components/navbar";
import {NavbarPage} from "@/lib/types";

export default function NotFoundPage() {
    return (
        <main className="text-center">
            <Navbar isActive={NavbarPage.None} />
            <h1 className="font-black text-[200px]">404</h1>
            <p>Sorry that page could not be found.</p>
        </main>
    )
}
