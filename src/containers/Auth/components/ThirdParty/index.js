import React from 'react';
import './ThirdParty.scss';

export default function ThirdParty() {
    return (
        <ul className="third-party">
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
                    <i className="fab fa-google" />
                </a>
            </li>
        </ul>
    )
}
