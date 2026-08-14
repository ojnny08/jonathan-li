import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="my-20 flex flex-col items-center gap-5 text-center">
            <h2 className="text-2xl text-ink-dark">
                Ready To Connect
            </h2>

            <p className="max-w-prose text-lg text-ink-dark">
                I'm always open to new connections. If you would like to discuss a project, brainstorm ideas, or connect over similar interests, feel free to reach out.
            </p>

            <div className="flex flex-row gap-2">
                <a
                    href="https://github.com/ojnny08"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-background-dark px-4 py-2 text-lg font-medium text-ink-cream">
                    <FaGithub className="size-6" />
                    ojnny08
                </a>
                <a
                    href="mailto:jonathan.li2051@gmail.com"
                    className="inline-flex items-center gap-3 rounded-full bg-background-dark px-4 py-2 text-lg font-medium text-ink-cream">
                    <Mail className="size-6" />
                    Jonathan.li2051@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-li-738a38237/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-background-dark px-4 py-2 text-lg font-medium text-ink-cream">
                    <FaLinkedin className="size-6" />
                    Jonathan Li
                </a>
            </div>
            
        </section>
    )
}
