import React, { useState } from 'react';
import './Header.scss';
import { LOGO } from 'constants/Image';
import DropDownMenu from 'components/DropDownMenu';

const dropDownItems = [
    {
        label: 'Settings',
    },
    {
        label: 'Account',
    },
    {
        label: 'Logout',
    },
];

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header fixed top-0 left-0 z-50 w-full bg-secondary h-16">
            <nav className="bg-secondary dark:bg-gray-800 text-center">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-10 w-20" src={LOGO.APP_LOGO} alt="logo" />
                            </a>
                        </div>

                        <div className="hidden md:block flex-shrink-0">
                            <div className="ml-20 flex items-baseline space-x-4">
                                <a className="header-label active" href="/#">
                                    Showtimes
                                    </a>
                                <a className="header-label" href="/#">
                                    Theaters
                                    </a>
                                <a className="header-label" href="/#">
                                    News
                                    </a>
                                <a className="header-label" href="/#">
                                    Contact
                                    </a>
                            </div>
                        </div>

                        {/* if user logged in => div user else div button login */}
                        <div className="header__button hidden md:block">
                            <button className="btn-large">Join Us</button>
                        </div>
                        {/* <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="ml-3 relative">
                                    <DropDownMenu
                                        withBackground={true}
                                        forceOpen={false}
                                        items={dropDownItems.map((item) => {
                                            return { label: item.label };
                                        })}
                                    />
                                </div>
                            </div>
                        </div> */}


                        <div className="-mr-2 flex md:hidden">
                            <button
                                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg width={20} height={20} fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a className="text-lg font-bold uppercase block px-3 py-2" href="/#">
                                Showtimes
                            </a>
                            <a className="text-lg font-bold uppercase block px-3 py-2" href="/#">
                                Theaters
                            </a>
                            <a className="text-lg font-bold uppercase block px-3 py-2" href="/#">
                                News
                            </a>
                            <a className="text-lg font-bold uppercase block px-3 py-2" href="/#">
                                Contact
                            </a>
                        </div>
                    </div>
                )}

            </nav>
        </header>
    )
}
