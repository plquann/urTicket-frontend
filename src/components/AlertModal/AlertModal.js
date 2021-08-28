import React from 'react';
import Popup from 'reactjs-popup';
import './AlertModal.scss'

const AlertModal = ({ open, content, onHandleConfirm }) => {

    return (
        <Popup
            trigger={() => open}
            modal
        >
            {close => (
                <div className="modal px-2">
                    <div className="content text-xl mb-8">
                        {content}
                    </div>
                    <div className="actions flex justify-end">
                        <button
                            className="button__close__modal"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="button__confirm__modal"
                            onClick={() => {
                                onHandleConfirm();
                                close();
                            }}
                        >
                            Confirm
                        </button>

                    </div>
                </div>
            )}
        </Popup>
    )
}

export default AlertModal
