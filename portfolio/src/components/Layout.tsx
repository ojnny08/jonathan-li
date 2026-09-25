import { Link, Outlet } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaStrava, FaEnvelope } from 'react-icons/fa6'
import FishingRod from './ui/FishingRod'


const SOCIAL = [
  { link: 'https://github.com/ojnny08', label: 'GitHub', Icon: FaGithub },
  { link: 'https://www.linkedin.com/in/jonathan-li-738a36237/', label: 'LinkedIn', Icon: FaLinkedin },
  { link: 'https://www.strava.com/athletes/85368241', label: 'Strava', Icon: FaStrava },
  { link: 'mailto:ojnny.li@gmail.com', label: 'Email', Icon: FaEnvelope },
]

export default function Layout() {
  return (
    <div id="top" className="relative min-h-dvh flex items-center text-ink-dark overflow-hidden">
      <FishingRod className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[80vh] w-auto opacity-20 hidden lg:block" />

      <main className="relative shell flex flex-col gap-5 w-full py-20">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-4xl">
            <Link to="/" className="mb-5 block">Jonathan Li</Link>
          </div>

          <Outlet />

          <div className="border-b border-ink-dark/40 pt-4"></div>
          <div className="flex flex-row gap-4 pt-4">
            {SOCIAL.map(({ link, label, Icon }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon size={23} />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
