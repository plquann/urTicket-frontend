import React from 'react';
import { Image_BG } from 'constants/Image';
import './NotFound.scss';
import { useHistory } from 'react-router';

export default function NotFound() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <div>
            <section className="notfound py-15 text-center items-center justify-center">
                <div className="container-lg mx-auto">
                    <div className="notfound__thumb max-w-screen-lg mx-auto">
                        <img className="w-3/4 mx-auto  py-5" src={Image_BG.NOTFOUND_BG} alt={404} />
                    </div>
                    <h3 className="notfound__title text-2xl font-semibold mb-12 uppercase">Oops.. looks like you got lost :( </h3>
                    <button className="notfound__btn 
                                        btn-large 
                                        transition duration-500 ease-in-out 
                                        transform hover:-translate-y-1 hover:scale-110 hover:shadow-btn-shadow uppercase"
                            onClick={handleClick}
                    >
                        Back To Home <i className="fa fa-arrow-right mr-4"></i>
                    </button>
                </div>
            </section>

        </div>
    )
}
