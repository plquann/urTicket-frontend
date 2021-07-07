import React from 'react';
import SingleSelect from 'components/SingleSelect/SingleSelect';

import './FilterStatus.scss';


const optionsType = [
    { label: 'Now Showing', value: 'Now Showing' },
    { label: 'Coming Soon', value: 'Coming Soon' },
]


const handleChange = () => {
    console.log("Hii change ")
}

export default function FilterStatus() {

    return (
        <div className="filter__sort">
            <div className="filter__sort__wrapper">
                <div className="filter__sort__wrapper__left ">
                    {/* <div className="filter__sort__wrapper__left__item item--left ">
                        <span className="show">Show :</span>
                        <div className="item__selector">
                            <SingleSelect
                                defaultValue={optionsItem[2]}
                                onChange={handleChange}
                                options={optionsItem}
                                placeholder={null}
                                maxMenuHeight={150}
                                customStyles={colourStyles}
                            />
                        </div>
                    </div> */}
                    <div className="filter__sort__wrapper__left__item item--right">
                        <div className="item__selector">
                            <SingleSelect
                                defaultValue={optionsType[0]}
                                onChange={handleChange}
                                options={optionsType}
                                placeholder={null}
                                maxMenuHeight={150}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};
