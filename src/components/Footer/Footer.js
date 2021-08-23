import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { LOGO_PARTNER } from 'constants/image';
import {AppStore, GooglePlay} from 'components/Icons';

export default function Footer() {
    return (
        <footer className="footer ">
            <div className="footer__wrapper max-w-screen-xl mx-auto">
                <section className="footer__wrapper__left col-span-2">
                    <header className="footer__wrapper__left__header">
                        <div className="footer__wrapper__left__header__title">
                            <p className="text-red-500 mr-2">MOVIE</p>
                            <p>PLATFORM</p>
                        </div>
                        <nav className="footer__wrapper__left__header__nav">
                            <NavLink className="footer__nav--item" to="/">Home</NavLink>
                            <NavLink className="footer__nav--item" to="/explore">Explore</NavLink>
                            <NavLink className="footer__nav--item" to="/news">News</NavLink>
                            <NavLink className="footer__nav--item" to="/profile">Profile</NavLink>
                            <NavLink className="footer__nav--item" to="/faq">FAQ</NavLink>
                            <NavLink className="footer__nav--item" to="/about">About Us</NavLink>
                        </nav>
                    </header>

                    <div className="footer__wrapper__left__info pr-6">
                        <h3>
                            Movie platform, where you can easily book movie tickets, view movie information,
                            showtimes. Get the latest news to movie topics. Have fun!
                        </h3>
                    </div>

                    <div className="footer__wrapper__left__contact">
                        <h3>If you have any questions, feel free to contact me</h3>
                        <p>
                            <i className="fa fa-envelope mr-3"></i>
                            <a href="mailto:quanphamluong@gmail.com" className="italic font-medium">
                                quanphamluong@gmail.com
                            </a>
                        </p>
                        <p>
                            <i className="fab fa-github mr-3"></i>
                            <a href="https://github.com/quankhs" className="italic font-medium">
                                QuanKhs
                            </a>
                        </p>
                    </div>

                    <div className="footer__wrapper__left__copyright">
                        <p className="text-gray-300 tracking-wider">
                            Copyright © 2021. Project by QuanKhs
                    <a href="http://github.com/quanKhs"><i className="fab fa-github ml-2"></i></a>
                        </p>
                    </div>


                </section>

                <section className="footer__wrapper__middle">
                    <div className="footer__wrapper__middle__title">
                        <p>Partners</p>
                        <p className="opacity-0">PPPP</p>
                    </div>
                    <div className="footer__wrapper__middle__icon">
                        {LOGO_PARTNER?.map((item, index) => {
                            return (
                                <a key={index} href={item.link} title={item.name} target="_blank" rel="noreferrer">
                                    <img className="rounded-full h-10 w-10" src={item.img} alt={item.name}></img>
                                </a>
                            )
                        })}
                    </div>
                </section>

                <section className="footer__wrapper__right">
                    <div className="footer__wrapper__right__title">
                        <p>Subscribe to urTicket </p>
                        <p className="opacity-0">PPPP</p>
                    </div>

                    <div className="form-newsletter">
                        <form className="newsletter__form relative">
                            <input className="w-full bg-transparent border border-gray-500 rounded p-2 " type="text" placeholder="Your Email Address" />
                            <button type="submit" className="h-full w-10 focus:outline-none absolute top-0 right-4 text-xl hover:text-yellow-500">
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </form>
                    </div>

                    <div className="footer__wrapper__right__title mt-6">
                        <p>Available</p>
                        <p className="opacity-0">PPPP</p>
                    </div>

                    <div className="mobile-platform grid grid-cols-2 gap-2">
                        <div className="app-store">
                            <AppStore className="w-full h-12 mr-2" />
                        </div>
                        <div className="google-play">
                            <GooglePlay name="GooglePlay" className="w-full h-12" />
                        </div>
                    </div>

                    <div className="footer__wrapper__right__title mt-6">
                        <p>Social</p>
                        <p className="opacity-0">PPPP</p>
                    </div>

                    <ul className="footer__wrapper__right__list">
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
                </section>
            </div>
        </footer>
    )
}
