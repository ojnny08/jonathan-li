const NAVBAR_META = {
    name: "Jonathan Li",
    navlink: [
        { href: '#about', label: 'About'},
        { href: '#experience', label: 'Work Experience'},
        { href: '#projects', label: 'Projects'}
    ]
}

function NavBar () {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
            <nav className="shell flex items-center justify-between p-4">
                <a
                    href="#top"
                    className="font-semibold tracking-tight text-ink-strong transition-colors hover:text-blue-light"
                >
                    {NAVBAR_META.name}
                </a>

                <ul className="flex items-center gap-1 sm:gap-2">
                    {NAVBAR_META.navlink.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="block rounded-md px-3 py-1 text-sm text-ink transition-colors hover:bg-blue hover:text-ink-strong sm:text-base"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
