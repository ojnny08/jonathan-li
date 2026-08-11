import '../index.css'
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
        <div className="flex items-center justify-between border-b-2 border-border text-lg px-10 py-4">
            <h1 className="">Jonathan</h1>
            <div className="flex flex-row gap-4">
                {NAVBAR_META.navlink.map(({href, label}) => (
                    <a key={href} href={href}>{label}</a>
                ))}
            </div>
        </div>
    )
}
export default NavBar;