import React from 'react';
import Popup from 'reactjs-popup';
import './PopupTrailer.scss';

const PopupTrailer = (props) => {
    return (
        <Popup
            trigger={() => props.open}
            modal
            className='trailer'
        >
            {close => (
                <div className="w-full h-full modal trailer-content">
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

export default PopupTrailer;