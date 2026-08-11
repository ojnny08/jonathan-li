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
        <div className="navbar">
            <div className="name">Jonathan</div>
            <div className="links">
                {NAVBAR_META.navlink.map(({href, label}) => (
                    <a key={href} href={href}>{label}</a>
                ))}
            </div>
        </div>
    )
}
export default NavBar;