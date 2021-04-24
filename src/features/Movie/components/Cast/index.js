import React from 'react';
import { CAST_PHOTO } from 'constants/Image';
import CustomCarousel from 'components/CustomCarousel';

const cast = [
    { name: 'Chris Evans', pos: 'actor', character: 'captain america', img: `${CAST_PHOTO[0]}` },
    { name: 'Robert Downey Jr', pos: 'actor', character: 'iron man', img: `${CAST_PHOTO[1]}` },
    { name: 'Chris Hemsworth', pos: 'actor', character: 'thor', img: `${CAST_PHOTO[2]}` },
    { name: 'Scarlett Johansson', pos: 'actor', character: 'black widow', img: `${CAST_PHOTO[3]}` },
    { name: 'Tom Holland', pos: 'actor', character: 'spider man', img: `${CAST_PHOTO[4]}` },
    { name: 'Elizabeth Olsen', pos: 'actor', character: 'scarlet witch ', img: `${CAST_PHOTO[5]}` },
    { name: 'josh brolin', pos: 'actor', character: 'thanos', img: `${CAST_PHOTO[6]}` },
    { name: 'Benedict Cumberbatch', pos: 'actor', character: 'doctor strange', img: `${CAST_PHOTO[7]}` },
]

export default function Cast() {
    return (
        <div className="cast mb-4 w-full">
            <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed #11326f' }}>
                <h3 className="text-2xl font-semibold">CAST</h3>
            </div>
            <CustomCarousel data={cast} />
        </div>
    )
}
