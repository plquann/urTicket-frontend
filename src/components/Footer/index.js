import React from 'react';
import './Footer.scss';
import { LOGO, LOGO_PARTNER, SVG_IMAGES } from 'constants/image';
import Newsletter from 'components/Newsletter';

export default function Footer() {
    return (
        <footer className="footer">
            <Newsletter />
            <div className="footer__wrapper">
                <div className="footer__wrapper__top">
                    <div className="footer__wrapper__top__logo">
                        <a href="/">
                            <img src={LOGO.APP_LOGO} alt="footer" />
                        </a>
                    </div>

                    <div className="footer__wrapper__top__social">
                        <ul className="list__social">
                            <li className="list__social__item hover:bg-blue-700">
                                <a href="#0">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list__social__item hover:bg-yellow-500">
                                <a href="#0" className="active">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list__social__item hover:bg-red-600">
                                <a href="#0">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                            </li>
                            <li className="list__social__item hover:bg-green-400">
                                <a href="#0">
                                    <i className="fab fa-google" />
                                </a>
                            </li>
                            <li className="list__social__item hover:bg-red-300">
                                <a href="#0">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__wrapper__bottom">
                    <div className="footer__wrapper__left">
                        <ul className="footer__wrapper__left__link">
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
                    <div className="footer__wrapper__middle">
                        <p className="footer__wrapper__middle__title"></p>
                        <div className="footer__wrapper__middle__icon">
                            {LOGO_PARTNER?.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} title={item.name} target="_blank" rel="noreferrer">
                                        <img className="rounded-full h-10 w-10" src={item.img} alt={item.name}></img>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="footer__wrapper__right ">
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

