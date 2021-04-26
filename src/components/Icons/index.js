import React from 'react';
import Dislike from './Dislike';
import Heart from './Heart';
import Like from './Like';
import LocationMarker from './LocationMarker';
import Next from './Next';
import NextArrow from './NextArrow';
import Prev from './Prev';
import PrevArrow from './PrevArrow';
import Verified from './Verified';


const Icons = props => {
    switch (props.name) {
        case "NextArrow":
            return <NextArrow {...props} />;
        case "PrevArrow":
            return <PrevArrow {...props} />;
        case "Heart":
            return <Heart {...props} />;
        case "Verified":
            return <Verified {...props} />;
        case "Like":
            return <Like {...props} />;
        case "Dislike":
            return <Dislike {...props} />;
        case "Location":
            return <LocationMarker {...props} />;
        case "Next":
            return <Next {...props} />;
        case "Prev":
            return <Prev {...props} />;
        default:
            return;
    }
};

export default Icons;
