// When your photos are ready, import them here and set them as `src` below:
// import running from '../assets/running.png'

import Stack, { type Photo } from './ui/Stack'

const OUTSIDE = {
    heading: 'Outside The IDE',
    body: "Physical activity is the best way to describe me. I crave the feeling of being tired, because I know I put all my energy into what I am doing, whether it's on a bike ride, at the gym, or out on a hike.",
}

const PHOTOS: Photo[] = [
    { src: '', alt: '', caption: 'Running' },
    { src: '', alt: '', caption: 'Cycling' },
    { src: '', alt: '', caption: 'Lifting' },
]

export default function OutsideIDE() {
    return (
        <section id="outsideIDE" className="my-15 ">
            <h2 className="text-2xl flex justify-center item-center text-ink-dark pb-5">
                {OUTSIDE.heading}
            </h2>

            <div className="mt-6 flex flex-col justify-center items-center gap-10 md:flex-row md:gap-14">
                <p className="w-100 text-lg text-ink-dark">
                    {OUTSIDE.body}
                </p>

                <div className="h-72 w-72 ">
                    <Stack cards={PHOTOS} />
                </div>
            </div>
        </section>
    )
}
