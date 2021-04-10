import React from 'react';

export default function TrailerModal(props) {
    return (
        <div>
            <div className="fixed pt-20 max-w-screen-md max-h-screen">
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM" frameborder="0" title="trailer-video"></iframe>
            </div>
        </div>
    );
}