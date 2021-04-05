import React, { useState } from 'react';
import './Header.css';
import { APP_LOGO } from 'constants/Image';
import DropDownMenu from 'components/DropDownMenu/DropDownMenu';

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
        <div className="header">
            <nav className="bg-secondary dark:bg-gray-800  ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-10 w-20" src={APP_LOGO} alt="logo" />
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-20 flex items-baseline space-x-4">
                                    <a className="header-label" href="/#">
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
                        </div>

                        {/* if user logged in => div user else div button login */}
                        <div className="header__button">
                            <button className="btn-large transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-btn-shadow">Join Us</button>
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
        </div>
    )
}
