import React from 'react';
import Modal from 'react-modal';

export default function TrailerModal(props) {
    return (
        <div>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM" frameborder="0" title="trailer-video"></iframe>
            </div>
        </div>
    );
}