import React from 'react';
import Popup from 'reactjs-popup';
import './PopupTrailer.scss';

export default function PopupTrailer(props = { idVideo: 'h3h035Eyz5A' }) {

    return (
        <Popup
            trigger={props.open}
            modal
            className='trailer'
        >
            {close => (
                <div className="w-full h-full modal">
                    <button className="close"
                        onClick={close}>
                        &times;
                    </button>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${props.idVideo}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            )}
        </Popup>
    )
}