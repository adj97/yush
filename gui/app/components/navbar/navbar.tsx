import Link from "@/node_modules/next/link";

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Yush</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                    <li style={{float:"right"}}><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header >
    )
}