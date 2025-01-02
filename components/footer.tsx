import {navbarLinks, socialLinks} from "@/lib/data";
import Link from "next/link";

export default function Footer({ currentPage }: { currentPage: string }) {
    return (
        <footer className="flex justify-between">
            <div>
                <ul className="flex items-center gap-3">
                { socialLinks.map((link) => (
                    <li>
                        <Link href={link.href}>
                            <link.icon style={{ width: 20, height: 20 }} />
                        </Link>
                    </li>

            ))}
                </ul>
                <p className="text-xs mt-12">Powered By <span className="bg-gradient-to-r from-red-300 to-red-500 text-transparent bg-clip-text">Luke Taylor</span></p>

            </div>

            <div>
                <div>
                    <ul>
                    { navbarLinks.map((link) => (
                        <li>
                            <Link href={link.href}>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}