import React from 'react';
import Dislike from './Dislike';
import Heart from './Heart';
import Like from './Like';
import NextArrow from './NextArrow';
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
        default:
            return;
    }
};

export default Icons;
