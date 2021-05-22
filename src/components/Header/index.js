import React, { useState } from 'react';
import './Header.scss';
import { LOGO } from 'constants/image';
import DropDownMenu from 'components/DropDownMenu';
import { NavLink } from 'react-router-dom';


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
    //console.log('🚀 ~ file: index.js ~ line 21 ~ Header ~ props', props.show);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const className = props.show
        ? `header visible ease-in transform-none`
        : `header invisible ease-out transform translate-x-0 -translate-y-full`;

    return (
        <header className={className} >
            <div className="header__wrapper max-w-screen-xl mx-auto flex-grow">
                <nav className="w-full bg-opacity-0 bg-gray-800 text-center flex flex-wrap items-center ">
                    <div className=" flex items-center">
                        <a className="flex-shrink-0" href="/">
                            <img className="h-10 w-20" src={LOGO.APP_LOGO} alt="logo" />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-20 flex items-baseline flex-grow space-x-4">
                            <NavLink activeStyle={{color: '#31d7a9'}} className="header-label" to="/home">
                                HOME
                            </NavLink>
                            <NavLink activeClassName="active" className="header-label" to="/explore">
                                EXPLORE
                                </NavLink>
                            <NavLink activeClassName="active" className="header-label" to="/news">
                                NEWS
                                </NavLink>
                            <NavLink activeClassName="active" className="header-label" to="/booking">
                                BOOKING
                                </NavLink>
                            <NavLink activeClassName="active" className="header-label" to="/details">
                                DETAILS
                                </NavLink>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <NavLink to="/signin" className="header-auth whitespace-nowrap ">
                            Sign in
                            </NavLink>
                        <NavLink to="/register" className="ml-8 header-auth selected whitespace-nowrap">
                            Sign up
                            </NavLink>
                    </div>
                    {/* if user logged in => div user else div button login */}

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



                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink className="header-label" to="/">
                                    HOME
                                </NavLink>
                                <NavLink activeClassName="active" className="header-label" to="/explore">
                                    EXPLORE
                                </NavLink>
                                <NavLink activeClassName="active" className="header-label" to="/news">
                                    NEWS
                                </NavLink>
                                <NavLink activeClassName="active" className="header-label" to="/booking">
                                    BOOKING
                                </NavLink>
                                <NavLink activeClassName="active" className="header-label" to="/details">
                                    DETAILS
                                </NavLink>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}
