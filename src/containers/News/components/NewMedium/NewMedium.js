import React from 'react';
import './NewMedium.scss';

import faker from 'faker';

const newContent = {
    imgUrl: faker.image.nature(),
}

export default function TopNewMedium(props) {
    return (
        <div className="new-medium">
            <div className="new-medium__thumbnails">
                <img src={newContent.imgUrl} alt="__thumbnails" />
            </div>
            <div className="new-medium__content" >
                <div className="new-medium__content__category mb-2">
                    <a href="#0">reviews</a>
                    <a href="#0">what's next</a>
                    <a href="#0">hot stuff</a>
                </div>
                <h2 className="line-clamp-3">
                    The Black Widow Scene David Harbour Enhanced By Improvising About Santa Claus</h2>
                <div className="new-large__content__info flex flex-wrap justify-between items-center mt-2">
                    <span className="font-medium text-sm">Christian David</span>
                    <p className="text-xs text-right"> May 9 2021 12:05 PM </p>
                </div>
            </div>

        </div>
    )
}
