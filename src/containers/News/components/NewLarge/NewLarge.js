import React from 'react';
import './NewLarge.scss';
import faker from 'faker';

const newContent = {
    imgUrl: faker.image.city(),
}

export default function NewLarge() {
    return (
        <div className="new-large">
            <div className="new-large__thumbnails">
                <img className="w-full h-full" src={newContent.imgUrl} alt="thumbnails" />
            </div>
            <div className="new-large__content">
                <div className="new-large__content__category mb-4">
                    <a href="#0">NEWS</a>
                    <a href="#0">TRENDING</a>
                    <a href="#0">HOT STUFF</a>
                </div>
                <h2 className="line-clamp-4">Scarlett Johansson joins criticism of Golden Globes body amid accusations of racism sexism</h2>
                <p className="new-large__content__subtitle line-clamp-5 text-gray-400">
                    Scarlett Johansson is one of the most recognizable actors in the world,
                    having been a fixture in film and television since she was a child.
                    Over time, she’s also become a voice within the industry, speaking out
                    on issues affecting both the entertainment landscape and society as a whole.
                    The Hollywood Foreign Press Association has been a particularly hot topic as of late,
                    as the organization has received backlash for a number of reasons.
                    Now, Johansson is lending her voice to the many who are calling for reform with the HFPA
                    by bluntly revealing why she's avoiding doing Golden Globes press for years
                </p>
                <div className="new-large__content__info flex flex-wrap justify-between items-center mt-8">
                    <span className="font-medium">Christian David</span>
                    <p className="text-xs text-right"> May 9 2021 12:05 PM </p>

                </div>
            </div>
        </div>
    )
}
