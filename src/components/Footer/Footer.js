import React from 'react';
import './Footer.scss';
import { IMAGE_BG, LOGO } from 'constants/Image';

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-white dark:bg-gray-800 w-full py-8">
                <div className="footer__newsletter">
                    <div className="newsletter__container bg-img" style={{ backgroundImage: `url(${IMAGE_BG.NEWSLETTER_BG})` }}>
                        <div className="newsletter__wrapper">
                            <h5 className="newsletter__title--sm uppercase">subscribe to urTicket </h5>
                            <h3 className="newsletter__title--md uppercase">to get exclusive benefits</h3>
                            <form className="newsletter__form mb-9">
                                <input className="newsletter__form__input " type="text" placeholder="Your Email Address" />
                                <button type="submit" className="newsletter__form__btn btn-large ">subscribe</button>
                            </form>
                            <p className="text-base">We respect your privacy, so we never share your info</p>
                        </div>
                    </div>

                </div>
                <div className="footer__wrapper">
                    <div className="footer__wrapper__top">
                        <div className="wrapper__top__logo col-start-1 col-end-2">
                            <a href="/">
                                <img src={LOGO.FOOTER_LOGO} alt="footer" />
                            </a>
                        </div>

                        <ul className="wrapper__top__social">
                            <li>
                                <a href="#0">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="active">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-google" />
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer__wrapper__bottom"></div>
                </div>
            </footer>
        </div>
    )
}

