import { FaGithub, FaLinkedin, FaStrava, FaEnvelope } from 'react-icons/fa6'

const LABELS = {
  sections: [
    { section: 'About',},
    { section: 'Work',},
    { section: 'Projects'},
  ],
  social: [
    { link: 'https://github.com/ojnny08', label: 'GitHub', Icon: FaGithub },
    { link: 'https://www.linkedin.com/in/jonathan-li-738a36237/', label: 'LinkedIn', Icon: FaLinkedin },
    { link: 'https://www.strava.com/athletes/85368241', label: 'Strava', Icon: FaStrava },
    { link: 'mailto:ojnny.li@gmail.com', label: 'Email', Icon: FaEnvelope },
  ]
}

export const Home = () => {
  return (
    <div id="top" className="min-h-dvh flex items-center">
        <main className='shell flex flex-col gap-5 w-full py-20'>
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-4xl text-ink-dark">
            <div className="mb-5">Jonathan Li</div>
            {LABELS.sections.map(({ section }) => (
                <h2 className="text-xl pb-4 text-ink-dark">
                  {section}
                </h2>
            ))}
          </div>
          <div className="border-b border-ink-dark/40 pt-4"></div>
          <div className="flex flex-row gap-4 pt-4">
            {LABELS.social.map(({ link, label, Icon }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-ink-dark"
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

export default Home
