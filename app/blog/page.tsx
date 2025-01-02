import Navbar from "@/components/navbar";
import {NavbarPage} from "@/lib/types";

export default function BlogPage() {
    return (
        <main>
            <Navbar isActive={NavbarPage.Blog} />
            <h1>Blog</h1>
        </main>
    )
}