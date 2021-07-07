import Medal from 'components/Medal'
import React from 'react';
import './TopNewMedium.scss'

export default function TopNewMedium(props) {
    return (
        <div className="top-new-medium">
            <div className="thumbnails">
                <img src="https://img.cinemablend.com/filter:scale/quill/e/b/2/b/7/1/eb2b715d128d36bbc2231e0c5e69cc74ce1d88f0.jpg?mw=600" alt="" />
            </div>
            <div className="title" >
                <h2 className="line-clamp-2">Jason Statham's Wrath Of Man Kicks The Summer Season Box Office Off To A Mediocre Start</h2>
                <p className="subtitle line-clamp-1 text-gray-400">
                    Scarlett Johansson is one of the most recognizable actors in the world,
                    having been a fixture in film and television since she was a child.
                    Over time, she’s also become a voice within the industry, speaking out
                    on issues affecting both the entertainment landscape and society as a whole.
                    The Hollywood Foreign Press Association has been a particularly hot topic as of late,
                    as the organization has received backlash for a number of reasons.
                    Now, Johansson is lending her voice to the many who are calling for reform with the HFPA
                    by bluntly revealing why she's avoiding doing Golden Globes press for years
                </p>
                <p className="mt-2"> May 9 2021 12:05 PM <span className="text-lg font-bold mx-2"> |</span>  <span className="font-medium"> by Alexander Clare</span></p>
            </div>
            <div className="ranking">
                <Medal rank={props.rank} />
            </div>
        </div>
    )
}
