import Stack, { type Photo } from '../components/ui/Stack'

import cave from '../image/cave.jpg'
import engine from '../image/engine.jpg'
import hike from '../image/hike.jpg'
import rock from '../image/rock.jpg'
import salmon from '../image/salmon.jpg'
import swan from '../image/swan.jpg'

const PHOTOS: Photo[] = [
    { src: hike, alt: 'Hiking', caption: 'Hiking' },
    { src: engine, alt: 'Cycling', caption: 'Cycling' },
    { src: salmon, alt: 'Fishing', caption: 'Fishing' },
    { src: cave, alt: 'Caving', caption: 'Caving' },
    { src: swan, alt: 'Swans on the water', caption: 'Wildlife' },
    { src: rock, alt: 'Climbing', caption: 'Climbing' },
]

const ABOUT_ME = {
    intro: "Currently a Computer Engineering student @ Toronto Metropolitan University focused on software development and data engineering.",
    hobbies: "In my free time, I am usually biking, fishing, or at the gym. I just love staying active and being outdoors."
}

function About() {
    return (
        <>
            <div className="text-2xl pb-4">About</div>
            <p className="text-lg">
                {ABOUT_ME.intro}
            </p>
            <div className="grid grid-cols-2 pt-8 pb-8">
                <p className="flex flex-cols items-center text-lg">
                    {ABOUT_ME.hobbies}
                </p>
                <div className='justify-self-center self-center h-40 w-40'>
                    <Stack cards={PHOTOS}/>
                </div>
            </div>
        </>
    )
}

export default About;
