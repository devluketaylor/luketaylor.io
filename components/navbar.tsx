import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div className="flex items-center">
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}