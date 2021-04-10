import React from 'react';
import './FilterCinema.scss';

export default function FilterCinema() {
    return (
        <div className="filter__cinema mx-auto" >
            <p className="filter__cinema__title">Cinema System</p>
            <div className="filter__cinema__wrapper">
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang1" /><label htmlFor="lang1">CGV</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang2" /><label htmlFor="lang2">LOTTE CINEMA</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang3" /><label htmlFor="lang3">BHD STAR</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang4" /><label htmlFor="lang4">GALAXY</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang5" /><label htmlFor="lang5">MegaGS</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang6" /><label htmlFor="lang6">Gujrati</label>
                </div>
                <div className="filter__cinema__wrapper__item">
                    <input type="checkbox" name="lang" id="lang7" /><label htmlFor="lang7">Bangla</label>
                </div>
            </div>
        </div>
    )
}
