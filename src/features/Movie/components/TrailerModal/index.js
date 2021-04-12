import React from "react";
import { createPortal } from "react-dom";
import './TrailerModal.scss'

const TrailerModal = ({ visible, toggle }) => visible ? createPortal(
    <div className="modal">
        <div className="modal-pop" role="dialog" aria-modal="true">
            <iframe width="967" height="544" src="https://www.youtube.com/embed/-BQPKD7eozY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button type="button" className="p-2 bg-gray-800" onClick={toggle}>Close</button>
        </div>
        <div className="modal-overlay"></div>
    </div>, document.body
) : null;

export default React.memo(TrailerModal);