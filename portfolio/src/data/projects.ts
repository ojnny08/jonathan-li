export type Project = {
    slug: string
    name: string
    code: string
    link: string
    details: string
    stack: Array<string>
    whyStack: string
    sections: Array<{ heading: string; body: string }>
    highlights: Array<string>
}

export const PROJECTS: Project[] = [
    {
        slug: 'bikco',
        name: 'Bikco',
        code: 'https://github.com/ojnny08/bike-builder',
        link: '',
        details: 'A visual bike builder for fixed gear bikes. You pick components from a large catalogue with compatibility warnings, total weight, and price recalculated on every change.',
        stack: ['React', 'Django', 'Redis Cache', 'AWS S3', 'PostgreSQL', 'Three.js',],
        whyStack: '',
        sections: [
            { heading: 'Compatibility engine', body: 'To find a compatible X components, look at the selected Y compponents, and filter X queryset' },
        ],
        highlights: [''],
    },
    {
        slug: 'nook',
        name: 'Nook',
        code: 'https://github.com/ojnny08/Nook',
        link: 'https://nook-floor-plan.vercel.app/',
        details: 'Turns a flat 2-D floor plan into a coloured 3-D render you can actually picture living in. Upload a plan and it reads the walls and rooms, then rebuilds them with height and materials so the space reads like a room instead of a diagram.',
        stack: ['React', 'Puter.js'],
        whyStack: '',
        sections: [],
        highlights: [''],
    },
    {
        slug: 'strava-stats',
        name: 'Strava-Stats',
        code: 'https://github.com/ojnny08/StravaRides',
        link: '',
        details: "A personal dashboard built on Strava's API. Pulls my activity history and computes the stats Strava doesn't provide",
        stack: ['React', 'FastAPI', 'AWS S3', 'PostgreSQL'],
        whyStack: '',
        sections: [],
        highlights: [''],
    },
]

export function getProjectBySlug(slug: string | undefined): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug)
}
