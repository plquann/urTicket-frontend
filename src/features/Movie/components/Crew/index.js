import React from 'react';
import { CAST_PHOTO } from 'constants/Image';
import CustomCarousel from 'components/CustomCarousel';

const crew = [
    { name: 'Chris Evans', pos: 'Directed', img: `${CAST_PHOTO[0]}` },
    { name: 'Robert Downey Jr', pos: 'Directed', img: `${CAST_PHOTO[1]}` },
    { name: 'Chris Hemsworth', pos: 'Directed', img: `${CAST_PHOTO[2]}` },
    { name: 'Scarlett Johansson', pos: 'Directed', img: `${CAST_PHOTO[3]}` },
    { name: 'Tom Holland', pos: 'Directed', img: `${CAST_PHOTO[4]}` },
    { name: 'Elizabeth Olsen', pos: 'Directed', img: `${CAST_PHOTO[5]}` },
    { name: 'josh brolin', pos: 'Directed', img: `${CAST_PHOTO[6]}` },
    { name: 'Benedict Cumberbatch', pos: 'Directed', img: `${CAST_PHOTO[7]}` },
]

export default function Crew() {
    return (
        <div className="crew mb-4 w-full">
            <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed #11326f' }}>
                <h3 className="text-2xl font-semibold">CREW</h3>
            </div>
            <CustomCarousel data={crew} />
        </div>
    )
}
