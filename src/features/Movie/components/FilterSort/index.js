import Showing from 'features/Booking/components/Showing';
import React from 'react';
import Select from 'react-select';
import './FilterSort.scss';

const optionsItem = [
    { label: 12, value: 12 },
    { label: 12, value: 12 },
    { label: 12, value: 12 },
    { label: 12, value: 12 },

];

const optionsType = [
    { label: 'Now Showing', value: 'Now Showing' },
    { label: 'Coming Soon', value: 'Coming Soon' },
]

const colourStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: 'transparent',
        height: '40px',
        border: '1px solid rgba(163, 177, 198, 0.151)',
        borderRadius: '20px',
        padding: '0 20px',
        color: '#ffffff',
        marginLeft: '10px',

    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: '#001232',
            color: '#ffffff',
        };
    },
    menu: styles => ({
        ...styles, backgroundColor: 'transparent', border: '1px solid rgba(163, 177, 198, 0.151)',
        textAlign: 'center',
    }),
    input: styles => ({ ...styles, ':hover': { ...styles, fontWeight: 'bold' } }),
    valueContainer: styles => ({ ...styles, paddingRight: '40px', width: '120px', textAlign: 'center' }),
    indicatorSeparator: styles => ({ ...styles, width: '0px' }),
    placeholder: styles => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles, color: '#ffffff', paddingLeft: '10px', paddingRight: '10px', overflow: '' }),
    indicatorContainer: styles => ({ ...styles, padding: '0px' }),
};

const handleChange = () => {
    console.log("Hii change ")
}

export default function FilterSort() {

    return (
        <div className="filter__sort">
            <div className="filter__sort__wrapper">
                <div className="filter__sort__wrapper__left ">
                    <div className="item">
                        <span className="show">Show :</span>
                        <Select
                            defaultValue={optionsItem[2]}
                            onChange={handleChange()}
                            options={optionsItem}
                            placeholder={null}
                            maxMenuHeight={150}
                            styles={colourStyles}
                        />
                    </div>
                    <div className="item ">
                        <span className="show">Sort By :</span>
                        <Select
                            defaultValue={optionsType[0]}
                            onChange={handleChange()}
                            options={optionsType}
                            placeholder={null}
                            maxMenuHeight={150}
                            styles={colourStyles}
                        />
                    </div>
                </div>
                <ul className="filter__sort__wrapper__right">
                    <li className="active">
                        <i className="fas fa-th" />
                    </li>
                    <li>
                        <i className="fas fa-bars" />
                    </li>
                </ul>
            </div>
        </div>

    )
};
