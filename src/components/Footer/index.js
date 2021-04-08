import React from 'react';
import './Footer.scss';
import { IMAGE_BG, LOGO, LOGO_PARTNER, SVG_IMAGES } from 'constants/Image';

export default function Footer() {
    return (
        <footer className="footer w-full py-8">
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
                    <div className="footer__wrapper__top border-b pb-5 border-gray-400 mb-5">
                        <div className="wrapper__top__logo col-start-1 col-end-2">
                            <a href="/">
                                <img src={LOGO.APP_LOGO} alt="footer" />
                            </a>
                        </div>

                        <div className="social col-end-4 justify-self-end">
                            <ul className="wrapper__top__social">
                                <li className="social__item hover:bg-blue-700">
                                    <a href="#0">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="social__item hover:bg-yellow-500">
                                    <a href="#0" className="active">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="social__item hover:bg-red-600">
                                    <a href="#0">
                                        <i className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                <li className="social__item hover:bg-green-400">
                                    <a href="#0">
                                        <i className="fab fa-google" />
                                    </a>
                                </li>
                                <li className="social__item hover:bg-red-300">
                                    <a href="#0">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__wrapper__bottom">
                        <div className="footer__wrapper__left">
                            <ul className="footer__left__info">
                                <li className="info__link">
                                    <a href="/">
                                        About
                                    </a>
                                </li>
                                <li className="info__link">
                                    <a href="/">
                                        Terms Of Use
                                    </a>
                                </li>
                                <li className="info__link">
                                    <a href="/">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="info__link">
                                    <a href="/">
                                        FAQ
                                    </a>
                                </li>
                                <li className="info__link">
                                    <a href="/">
                                        Feedback
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__wrapper__middle justify-self-center">
                            <p className="footer__middle__title text-2xl mb-4 text-center">
                            </p>
                            <div className="footer__icon__partner">
                                {LOGO_PARTNER?.map((item, index) => {
                                    return (
                                        <a key={index} href={item.link} title={item.name} target="_blank" rel="noreferrer">
                                            <img className="icon__partner" src={item.img} alt={item.name}></img>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="footer__wrapper__right justify-self-end">
                            <div className="flex justify-center">
                                <a href="http://google.com"><img className="w-44 h-24" src={SVG_IMAGES.SVG_GGPLAY} alt="SVG_GGPLAY" /></a>

                            </div>
                            <div className="flex justify-center">
                                <a href="http://apple.com"><img className="w-44 h-24" src={SVG_IMAGES.SVG_APPSTORE} alt="SVG_APPSTORE" /></a>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <p className="text-center text-gray-300 tracking-wider">
                        Copyright © 2021. Project by QuanKhs
                    <a href="http://github.com/quanKhs"><i className="fab fa-github ml-2"></i></a>
                    </p>
                </div>
            </footer>
    )
}

