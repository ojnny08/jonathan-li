import { Fragment } from 'react'
import { CodeXml, AppWindow } from 'lucide-react'

const EXPERIENCE = [
    {
        name: 'Gardiner Roberts',
        date: 'May 2026',
        desc: 'Built a CSV-to-TXT converter that lets the accounting team reformat client data in seconds instead of editing files by hand. The React and Vite that takes a raw CSV, cleans up the columns, and outputs a text file in the exact layout their software expects. It cuts out a slow and error prone manual step from their daily workflow.',
        code: 'https://github.com/ojnny08/GB_Converter',
        website: ''
    },
    {
        name: 'Dalhousie Economics Club',
        date: 'Sept 2026',
        desc: 'Designed and shipped a serverless website for the club with a built-in admin panel, so a single admin account can update content, events, and images directly through the browser without ever touching the code. Built with React, TypeScript, and Vite on the front end and Firebase (Firestore, Storage, and Hosting) on the back end, giving the club a low-maintenance site they can manage entirely on their own.',
        code: 'https://github.com/ojnny08/Janets-club',
        website: 'https://dalecon.ca/'
    }

]

export default function Experience() {
    return (
        <>
            <h1 className="text-2xl pb-4">Experience</h1>
            <div className="grid grid-cols-2 gap-4">
                {EXPERIENCE.map(({ name, date, desc, code, website}) => (
                    <Fragment key={name}>
                        <div className="text-lg">
                            <h2>{name}</h2>
                            <div className="flex gap-2">
                                <a href={website} target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                                    <AppWindow size={18} />
                                </a>
                                
                                <a href={code} target="_blank" rel="noopener noreferrer" aria-label="View code">
                                    <CodeXml size={18} />
                                </a>
                            </div>
                            <p className="text-sm">{date}</p>
                        </div>
                        <div>
                            <p>{desc}</p>
                        </div>
                    </Fragment>
                ))}
            </div>
        </>
    )
}
