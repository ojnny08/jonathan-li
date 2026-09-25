const ABOUT_ME = {
    role: 'Computer Engineering @ Toronto Metropolitan University',
    body: "A Computer Engineering student at Toronto Metropolitan University focused on software development and data engineering.",
}

function About() {
    return (
        <section id="about">
            <div className="text-2xl pb-4">About</div>
            <p className="text-lg">
                {ABOUT_ME.body}
            </p>
        </section>
    )
}

export default About;
