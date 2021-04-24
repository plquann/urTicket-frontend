import React from 'react';
import { IMAGE_BG } from 'constants/image';
import './NotFound.scss';
import { useHistory } from 'react-router';

export default function NotFound() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <div>
            <section className="notfound">
                <div className="notfound__container mx-auto">
                    <div className="notfound__container__img">
                        <img className="w-3/4 mx-auto py-5" src={IMAGE_BG.NOTFOUND_BG} alt={404} />
                    </div>
                    <h3 className="notfound__container__title">Oops.. looks like you got lost :( </h3>
                    <button className="notfound__btn btn-large"
                            onClick={handleClick}
                    >
                        Back To Home <i className="fa fa-arrow-right mr-4"></i>
                    </button>
                </div>
            </section>

        </div>
    )
}
