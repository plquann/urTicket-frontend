import Medal from 'components/Medal/Medal'
import { randomGenres } from 'constants/genres'
import React from 'react';
import './TopNewLarge.scss';

export default function TopNewLarge() {
    return (
        <div className="top-new-large">
            <div className="top-new-large__thumbnails">
                <img className="w-full h-full" src="https://cdn.mos.cms.futurecdn.net/rNqRoby4d3rr9QCnigVq2B-1024-80.jpeg.webp" alt="" />
            </div>
            <div className="top-new-large__title">
                <h2 className="line-clamp-4">Scarlett Johansson joins criticism of Golden Globes body amid accusations of racism sexism</h2>
                <p className="subtitle line-clamp-6 text-gray-400">
                    Scarlett Johansson is one of the most recognizable actors in the world,
                    having been a fixture in film and television since she was a child.
                    Over time, she’s also become a voice within the industry, speaking out
                    on issues affecting both the entertainment landscape and society as a whole.
                    The Hollywood Foreign Press Association has been a particularly hot topic as of late,
                    as the organization has received backlash for a number of reasons.
                    Now, Johansson is lending her voice to the many who are calling for reform with the HFPA
                    by bluntly revealing why she's avoiding doing Golden Globes press for years
                </p>
                <div className="flex flex-wrap justify-between items-center pr-4 mt-4">
                    <p> May 9 2021 12:05 PM </p>
                    <p className="font-medium">Christian David</p>
                </div>
            </div>
            <div className="top-new-large__ranking ">
                <Medal rank='1' />
            </div>

        </div>
    )
}
