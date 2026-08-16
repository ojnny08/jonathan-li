import Stack, { type Photo } from './ui/Stack'
import cave from '../image/cave.jpg'
import engine from '../image/engine.jpg'
import hike from '../image/hike.jpg'
import rock from '../image/rock.jpg'
import salmon from '../image/salmon.jpg'
import swan from '../image/swan.jpg'

const OUTSIDE = {
    heading: 'Outside The IDE',
    body: "Physical activity and being in nature is the best way to describe me. I crave the feeling of being tired, because I know I put all my energy into what I am doing, whether it's on a bike ride, enjoying nature while fishing, or out on a hike.",
}

const PHOTOS: Photo[] = [
    { src: hike, alt: 'Hiking', caption: 'Hiking' },
    { src: engine, alt: 'Cycling', caption: 'Cycling' },
    { src: salmon, alt: 'Fishing', caption: 'Fishing' },
    { src: cave, alt: 'Caving', caption: 'Caving' },
    { src: swan, alt: 'Swans on the water', caption: 'Wildlife' },
    { src: rock, alt: 'Climbing', caption: 'Climbing' },
]

const HOBBIES = ["Cycling", "Hiking", "Fishing"];

export default function OutsideIDE() {
    return (
        <section id="outsideIDE">
            <h2 className="text-2xl flex justify-center item-center text-ink-dark pb-5">
                {OUTSIDE.heading}
            </h2>

            <div className="mt-6 flex flex-col justify-center items-center gap-10 md:flex-row md:gap-14">
                <div className="flex w-100 flex-col gap-4">
                    <p className="text-lg text-center text-ink-dark">
                        {OUTSIDE.body}
                    </p>

                    <ul className="flex flex-wrap justify-center gap-2">
                        {HOBBIES.map((hobby) => (
                            <li
                                key={hobby}
                                className="w-18 rounded-full border border-border-dark text-center text-xs text-ink-dark">
                                {hobby}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-72 w-72 ">
                    <Stack cards={PHOTOS} />
                </div>
            </div>
        </section>
    )
}
