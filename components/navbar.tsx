
import Link from "next/link";
import { JSX } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navbarLinks } from "@/lib/data";
import { NavbarPage } from "@/lib/types";

export default function Navbar({ isActive }: { isActive: NavbarPage }): JSX.Element {
    return (
        <nav>
            <div className="flex items-center justify-between pt-8">
                <ul className="flex items-center gap-4">
                    { navbarLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <p className={`${isActive ===  link.rel ? "text-black dark:text-white" : "text-zinc-500 "}`}>{link.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    )
}