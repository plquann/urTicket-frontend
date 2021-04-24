import React from 'react';
import './Newsletter.scss';
import { IMAGE_BG } from 'constants/image';

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter__container bg-img" style={{ backgroundImage: `url(${IMAGE_BG.NEWSLETTER_BG})` }}>
                <div className="newsletter__container__wrapper">
                    <h5 className="newsletter__title--sm">subscribe to urTicket </h5>
                    <h3 className="newsletter__title--md">to get exclusive benefits</h3>
                    <form className="newsletter__form">
                        <input className="newsletter__form__input " type="text" placeholder="Your Email Address" />
                        <button type="submit" className="newsletter__form__btn btn-large">subscribe</button>
                    </form>
                    <p className="text-base">We respect your privacy, so we never share your info</p>
                </div>
            </div>
        </div>
    )
}
